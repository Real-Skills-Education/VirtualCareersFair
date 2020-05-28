import {IGetCompanyInfo} from 'interfaces/ICompany';

const makeGetCompany = (companyDb) => {
  const getCompany: IGetCompanyInfo = async (id) => {
    return {
      id: 'sadsadsadsa',
      name: 'jojo',
      overview: 'bizzare adventures',
      graduate_stories: ['wow'],
      videos: 'www.youtube.com',
      website: 'www.google.com',
      contact_info: 'contact@google.com'
    };
  }
  return getCompany;
}

export default makeGetCompany;