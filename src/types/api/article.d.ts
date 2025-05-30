export interface IArticleData {
  id: number
  title: string
  description: string
  path: string
  tag_list: string[]
  tags: string[]
  cover_image: string
  url: string
  user: {
    username: string
    profile_image: string
  }
  body_html?: string
  readable_publish_date?: string
  comments_count: number
  page_views_count: number
}
