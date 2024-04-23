export interface ParamsSearch {
    include_adult?: boolean;
    primary_release_year?: string;
    region?: string;
    year?: string;
    page?: string;
    [key: string]: string | boolean | undefined;
  }
  