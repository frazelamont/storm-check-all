import should from 'should';
import 'jsdom-global/register';
import CheckAll from '../dist/storm-check-all.standalone';

const html = `<div class="form-group relative">
<input class="js-check__all" type="checkbox" id="check-all" data-group="group-1">
<label for="check-all" id="toggle-label">Check all</label>
</div>
<div class="col small-12 medium-6 relative">
<input data-group-name="group-1" id="item-1" class="form-row-checkbox__checkbox" type="checkbox" name="items" value="1">
<label for="item-1" class="form-control-label form-control-label--checkbox">
  Item 1
</label>
</div>
<div class="col small-12 medium-6 relative">
<input data-group-name="group-1" id="item-2" class="form-row-checkbox__checkbox" type="checkbox" name="items" value="2">
<label for="item-2" class="form-control-label form-control-label--checkbox">
  Item 2
</label>
</div>
<div class="col small-12 medium-6 relative">
<input data-group-name="group-1" id="item-3" class="form-row-checkbox__checkbox" type="checkbox" name="items" value="3">
<label for="item-3" class="form-control-label form-control-label--checkbox">
  Item 3
</label>
</div>
<div class="col small-12 medium-6 relative">
<input data-group-name="group-1" id="item-4" class="form-row-checkbox__checkbox" type="checkbox" name="items" value="4">
<label for="item-4" class="form-control-label form-control-label--checkbox">
  Item 4
</label>
</div>
<div class="col small-12 medium-6 relative">
<input data-group-name="group-1" id="item-5" class="form-row-checkbox__checkbox" type="checkbox" name="items" value="5">
<label for="item-5" class="form-control-label form-control-label--checkbox">
  Item 5
</label>
</div>`;

document.body.innerHTML = html;
  
let CheckEmAll = CheckAll.init('.js-check__all'),
	items = [].slice.call(document.getElementsByName('items'));


describe('Initialisation', () => {

  it('should return an Array of CheckAll objects', () => {
	should(CheckEmAll)
	  .Array()
	  .and.have.lengthOf(1);

  });

  it('each CheckAll object should have a toggle function', () => {

	CheckEmAll[0].should.be.an.instanceOf(Object);
	CheckEmAll[0].should.have.property('toggle').Function();

  });

  it('the toggle function should update each input in the group\'s state', () => {
	CheckEmAll[0].toggle();
	
	  items
		.reduce((acc, curr) => {
			if(!curr.checked) acc = false;
			return acc;
		}, true)
	  	.should.equal(true);

  });

});