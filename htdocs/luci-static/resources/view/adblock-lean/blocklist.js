'use strict';
'require adblock-lean.fileeditor as ablfe';

return ablfe.fileEditor.extend({
	doLowercase: true,
	
	filename: 'blocklist',

	instructions: _('<p>This is your local AdBlock Lean blocklist, where you can specify domain names to block.</p>\
		<p>This is useful if the blocklist urls you subscribe to miss something you want to block -- rather than\
		   having to switch to a more restrictive blocklist, you can just list the domain(s) here to ensure they get blocked.</p>\
		<p><em><b>Please note:</b></em> add only exactly one domain name per line.</p>'),
});
