\c messages_dev;

INSERT INTO messages (message, favorite, sender_id) VALUES 
('Hello how are you doing?', false, 2),
('Good and you?', false, 1),
('Tell Bob to send me the check please', false, 2),
('Can you send the check now Juan?', false, 1),
('Okay I will', true, 2);

INSERT INTO users_messages (message_id, user_id) VALUES (1, 1), (5, 1), (3, 1), (2, 2), (4, 2);