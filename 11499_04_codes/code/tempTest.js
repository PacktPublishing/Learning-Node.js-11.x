describe(NumberList, ()=>{

let ListunderTest = null;

beforeEach() =>{

	listUnderTest = new NumberList();

}

describe('after Initialization', () => {

it('should sum to zero'., () =>


{


	expect(listUnderTest.sumAll().to.equal(0));
});


it('should give the product equal to null', () =>{


	expect(listUnderTest.multiplyAll().to.equal(0))


});

});



})