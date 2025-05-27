export interface IArticleData {
  id: string
  title: string
  description: string
  tag_list: string[]
  cover_image: string
  url: string
  user : {
    username: string
  }
}
