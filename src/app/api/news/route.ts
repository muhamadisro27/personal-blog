import { useRuntimeConfig } from "@/lib/config"
import { INewsData } from "@/types/api/news"
import { HTTP_STATUS_CODE } from "@/utils/api"
import axios from "axios"
import { NextResponse } from "next/server"

interface INewsResponseApi {
  status: string
  sources: INewsData
}

export async function GET() {
  const { baseURL, apiKey } = useRuntimeConfig()

  try {
    const response = await axios.get(
      `${baseURL.news}/top-headlines/sources?category=technology`,
      {
        headers: {
          "X-Api-Key": apiKey.news,
        },
      }
    )

    const data = response.data as INewsResponseApi

    return NextResponse.json(data.sources)
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Internal Server Error",
      },
      {
        status: HTTP_STATUS_CODE.SERVER_ERROR,
      }
    )
  }
}
