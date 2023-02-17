\c messages_dev;

INSERT INTO messages (message, favorite) VALUES 
('Hello how are you doing?', false),
('Good and you?', false),
('Tell bob234 to send me the check please', false),
('Can you send juan746 the check?', false),
('Okay I will', true);

INSERT INTO users (username, password) VALUES 
('Juan', 'dev'), ('Alex', 'dad');

INSERT INTO users_messages (message_id, user_id) VALUES (1, 1), (5, 1), (3, 1), (2, 2), (4, 2);