import {api} from '../config/global.config'

export const  getCompanies = () => {
    return api.get('company');
  };

export const searchCompanies = (search) => {
  return api.get('search-company', {params: {search: search}})
}

export const addCompany = (value) => {
  return api.post('company', value)
}
