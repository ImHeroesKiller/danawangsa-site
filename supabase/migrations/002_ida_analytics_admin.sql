-- IDA Phase 4: conversation analytics, admin feedback, reindex jobs

create table if not exists ida_conversation_logs (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  user_message text not null,
  assistant_reply text not null,
  retrieved_chunks int not null default 0,
  locale text not null check (locale in ('id', 'en', 'zh')),
  inferred_topic text,
  converted_to_form boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists ida_conversation_logs_session_idx
  on ida_conversation_logs (session_id);

create index if not exists ida_conversation_logs_created_at_idx
  on ida_conversation_logs (created_at desc);

create index if not exists ida_conversation_logs_locale_idx
  on ida_conversation_logs (locale);

create index if not exists ida_conversation_logs_converted_idx
  on ida_conversation_logs (converted_to_form);

create table if not exists ida_conversation_feedback (
  id uuid primary key default gen_random_uuid(),
  session_id text not null unique,
  rating text check (rating in ('up', 'down')),
  needs_kb_improvement boolean not null default false,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists ida_conversation_feedback_session_idx
  on ida_conversation_feedback (session_id);

create table if not exists ida_reindex_jobs (
  id uuid primary key default gen_random_uuid(),
  status text not null check (status in ('pending', 'running', 'completed', 'failed')),
  triggered_by text not null,
  chunks_indexed int,
  error_message text,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists ida_reindex_jobs_created_at_idx
  on ida_reindex_jobs (created_at desc);