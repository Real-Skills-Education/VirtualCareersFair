import {IUpdateCompanyInfo} from 'interfaces/ICompany';

const makeUpdateCompany = (companyDb) => {
  const updateCompany: IUpdateCompanyInfo = async (id: string, info) => {
    return {
      id: 'sadsadsadsa',
      name: 'jojo',
      overview: 'bizzare adventures',
      graduate_stories: ['wow'],
      videos: 'www.youtube.com',
      website: 'www.google.com',
      contact_info: 'contact@google.com'
    }
  }
  return updateCompany;
}

export default makeUpdateCompany;