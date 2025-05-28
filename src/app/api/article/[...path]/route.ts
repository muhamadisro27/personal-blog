import { runtimeConfig } from "@/lib/config"
import { HTTP_STATUS_CODE } from "@/utils/api"
import axios from "axios"

export async function GET(
  request: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const params = await context.params
    const fullPath = params.path.join("/")
    const { baseURL, apiKey } = runtimeConfig()

    if (!params.path || params.path.length === 0) {
      return new Response(
        JSON.stringify({ error: "Path parameter is missing" }),
        { status: HTTP_STATUS_CODE.BAD_REQUEST }
      )
    }

    const response = await axios.get(`${baseURL.article}/articles/${fullPath}`, {
      headers : {
        'api-key' : apiKey.article
      }
    })

    return new Response(JSON.stringify(response.data), {
      status: HTTP_STATUS_CODE.SUCCESS,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
      },
    })
  } catch (error) {
    console.error("API Error:", error)

    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : String(error),
      }),
      {
        status: HTTP_STATUS_CODE.SERVER_ERROR,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    )
  }
}
