CREATE TABLE IF NOT EXISTS good_email_domains (
  domain text PRIMARY KEY
);

INSERT INTO good_email_domains (domain) VALUES ('utoronto.ca') ON CONFLICT DO NOTHING;
INSERT INTO good_email_domains (domain) VALUES ('mail.utoronto.ca') ON CONFLICT DO NOTHING;
