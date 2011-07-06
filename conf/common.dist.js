exports.conf = {
	// IRC Config. If you're using a nick that's registered, be sure to
	// include its password.
	jerk: {
		// log: false,
		channels: ['#yourchannel', '#yourotherchannel'],
		nick: 'yournick',
		user: {
			// hostname: 'localhost',
			realname: 'Yourname',
			username: 'yournick'
		},
		// port: 6697,
		server: 'irc.mozilla.org',
		// ssl: true
	},
	// Number of chat messages that need to be sent for vacation-bot to say
	// something in the channel.
	message_count: 125,
	// Phrases vacation-bot will randomly say.
	phrases: [
	    'Sure, I like Django, but Rails is better.',
	],
	// Phrases you will reply with when your IRC handle is mentioned.
	replies: [
	    'I am so not working; ask someone else!'
	]
};
