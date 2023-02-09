\c messages_dev;

INSERT INTO messages (message, favorite, sender, receiver) VALUES 
('Hello how are you doing?', false, 1, 2),
('Good and you?', false, 2, 1),
('Tell bob234 to send me the check please', false, 1, 3),
('Can you send juan746 the check?', false, 3, 4),
('Okay I will', true, 4, 3);

INSERT INTO users (username, password) VALUES
('juan746', '3bf34'),
('alex834', 'nf83v'),
('monica355', 'bn49f'),
('bob234', '449nf'),
('edgar619', '4nf03');