export interface Owner {
  readonly reputation: number;
  readonly user_id: number;
  readonly user_type: string;
  readonly accept_rate?: number;
  readonly profile_image: string;
  readonly display_name: string;
  readonly link: string;
};

export interface CommonPostData {
  readonly owner: Owner;
  readonly last_activity_date: number;
  readonly last_edit_date: number;
  readonly creation_date: number;
  readonly question_id: number;
  readonly content_license?: string;
  readonly score: number;
}

export interface Post extends CommonPostData {
  readonly tags: ReadonlyArray<string>;
  readonly is_answered: boolean;
  readonly view_count: number;
  readonly favorite_count: number;
  readonly down_vote_count: number;
  readonly up_vote_count: number;
  readonly answer_count: number;
  readonly link: string;
  readonly title: string;
  readonly body: string;
};

export type PostsDto = ReadonlyArray<Post>;

export interface AuthorDto {
  readonly items: PostsDto;
  readonly has_more: boolean;
  readonly quota_max: number;
  readonly quota_remaining: number;
}

export interface AnswerDto extends CommonPostData {
  readonly is_accepted: boolean;
  readonly answer_id: number;
}
