// Boom, setup stuff.
var conf = require('node-config'),
jerk = require('jerk'),
sys = require('sys'),
puts = sys.puts,
inspect = sys.inspect;

conf.initConfig(
    function(err) {
        if(err) {
            sys.log('Unable to init the config: ' + err); 
            return;
        }
        // Config loaded, can do those things now:
        console.log(conf.jerk);
		run();
    }
);

var run = function() {
var vacation_bot = jerk(function(j) {
	var message_count = 0;

	// Increment the message count; once it reaches the number of messages
	// needed for an interjection (defined in the config), say a random
	// phrase. Saying something based on chat activity ensures random phrases
	// don't get pushed out while everyone is asleep/offline (and means
	// the bot will talk more on busy channels, which is lol).
	j.watch_for(/^.*$/, function(message) {
		message_count++;
		
		if (message_count == conf.message_count) {
		    message.say(
		        conf.phrases[Math.floor(Math.random() * conf.phrases.length)]
		    );
		    
		    // Reset the message count after vacation-bot says something.
		    message_count = 0;
		}
	});

	// Watch for your IRC nick and reply with a random phrase from the
	// "replies" section in your config.
	j.watch_for(conf.jerk.nick, function(message) {
		message.say(
		    conf.replies[Math.floor(Math.random() * conf.replies.length)]
		);
	});

	// Rick roll'd
	j.watch_for('youtube.com', function(message) {
		message.say("Hah, nice! You should check this out too: http://www.youtube.com/watch?v=oHg5SJYRHA0");
	});

}).connect(conf.jerk);
}
