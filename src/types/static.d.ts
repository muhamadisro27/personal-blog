export interface ICareerData {
  job_title: string
  company: ICompanyInformation
  period: string
  start_date: string
  end_date: string | null
}

interface ICompanyInformation {
  image: string
  name: string
  location: string
}
