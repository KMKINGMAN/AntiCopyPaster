const figlet = require('figlet');
module.exports = {
	name: 'ready',
	once: true,
async	execute(client) {
    figlet('KINGMAN', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
    client.user.setPresence({
      status: 'online',
      activity:{
        name:'KINGMAN COPYPASTER SYSTEM',
        type:'STREAMING',
        url: 'https://www.twitch.tv/kingman4hack'
      }
    })
	}
}