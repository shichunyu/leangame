// HTML Content Inserts
var swimlanesCode = `
	<div class="row height_swimlane border_top">
	</div>`;


var swimlanesStagesCode = `
	<div class="col-sm-3 h-100 overflow">
    </div>`;

var cardCode = 
	`<div class="card" id="null">
		<span class="priority">Normal</span><span class="cardID"></span><br>
		<span class="owner">Owner: </span><br>
		<span class="devWork">Dev Work: <span class="replace">0</span></span><br>
		<span class="qaWork">QA Work: <span class="replace">0</span></span><br>
		<span class="touchPoints">Touch Points: <span class="replace">0</span></span><br>
		<span></span>
		<span class="blocked"></span>
	</div>`;

var contentCollection = [];
contentCollection[0] = '<p>Congratulations on getting hired!</p> <p>You just started a new job at Spring Rain Labs as a developer.</p> <p>You will be team are working with a team of 6 people. Everyone on your team, including you, is capable of doing development and their own QA testing, but not everyone can work on the same tasks.</p><p>Your manager, Confused Kitty, will be assigning you work. Your job is to get your work done as fast as possible, in the right priorities.</p><p>Let’s go!</p>'