export interface IArticleData {
  id: number
  title: string
  description: string
  path: string
  tag_list: string[]
  cover_image: string
  url: string
  user: {
    username: string
  }
}

export interface IArticleDetail
  extends Pick<
    IArticleData,
    "title" | "description" | "cover_image" | "tag_list" | "user"
  > {
  body_html: string
  readable_publish_date : string
}
