export type IdaMessageRole = "user" | "assistant";

export interface IdaMessage {
  id: string;
  role: IdaMessageRole;
  content: string;
}

export interface IdaChatRequest {
  messages: Pick<IdaMessage, "role" | "content">[];
  locale: string;
  sessionId?: string;
}

export interface IdaChatResponseMeta {
  retrievedChunks: number;
  usedRag: boolean;
}

export interface IdaChatResponse {
  message: string;
  meta?: IdaChatResponseMeta;
}

export interface IdaChatErrorResponse {
  error: string;
}