export type IdaMessageRole = "user" | "assistant";

export interface IdaMessage {
  id: string;
  role: IdaMessageRole;
  content: string;
}

export interface IdaChatRequest {
  messages: Pick<IdaMessage, "role" | "content">[];
  locale: string;
}

export interface IdaChatResponse {
  message: string;
}

export interface IdaChatErrorResponse {
  error: string;
}