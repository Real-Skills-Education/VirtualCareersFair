import {IUserEntity, IUserEntityMakeArgs, IUserData} from 'interfaces/entities/IUser.entity';
import {IAnalyticsPre, IGraduateStory} from 'interfaces/ICompany';

export interface ICompanyEntity extends IUserEntity {
  name: string | null;
  slogan: string | null;
  overview: string | null;
  graduate_stories: IGraduateStory[];
  website_link: string | null;
  contact_email: string | null;
  video: string | null;
  banner_image: string | null;
  logo_image: string | null;
  taking_interns: boolean | null;
  taking_graduates: boolean | null;
  page_analytics: IAnalyticsPre[];
}

export interface ICompanyEntityMakeArgs extends IUserEntityMakeArgs {
  name?: string;
  slogan?: string;
  overview?: string;
  graduate_stories?: IGraduateStory[];
  website_link?: string;
  contact_email?: string;
  video?: string;
  banner_image?: string;
  logo_image?: string;
  taking_interns?: boolean;
  taking_graduates?: boolean;
  page_analytics?: IAnalyticsPre[];
}

export interface ICompanyData extends IUserData {
  name: string | null;
  slogan: string | null;
  overview: string | null;
  graduate_stories: IGraduateStory[];
  website_link: string | null;
  contact_email: string | null;
  video: string | null;
  banner_image: string | null;
  logo_image: string | null;
  taking_interns: boolean | null;
  taking_graduates: boolean | null;
  page_analytics: IAnalyticsPre[];
}