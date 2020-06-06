import {IGetCompanyAnalytics} from 'interfaces/ICompany';

const makeGetCompanyAnalyticsData = (companyDb) => {
  const getCompanyAnalyticsData: IGetCompanyAnalytics = async (id: string) => {
    return {
      data: [{
        id: 'saudiewqurniewrew',
        created_at: '1/1/20',
        first_name: 'hihi',
        last_name: 'hehe',
        about: 'my name is hihi hehhe and I would like a job ty',
        skills: ['coding', 'talking', 'sitting', 'eating'],
        uni: 'matheletics',
        degree: 'bachelor of matheletics',
        resume_link: 'https://www.google.com',
        linkedin_link: 'https://www.linkedin.com',
        github_link: 'https://www.github.com',
        portfolio_link: 'https://www.hihihihehehe.io',
      }]
    }
  }
  return getCompanyAnalyticsData;
}

export default makeGetCompanyAnalyticsData;