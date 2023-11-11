//SPDX-License-Identifier: MIT
pragma solidity  ^0.8.10;

contract Review {
    address private owner;
    Place[] public places;

    mapping(address => mapping(uint256 => Place)) public placeAddedByUser;

    struct Place {
        string name;
        string location;
        uint256 rating;
        string review;
    }
    
    constructor(){
        owner = msg.sender;
    }

    function addPlace(string memory name, string memory location, uint256 rating, string memory review) public{
        require(rating >=0 && rating <=5, "Rating should be between 0 and 5");
        Place memory place = Place(name, location, rating, review);
        placeAddedByUser[msg.sender][places.length] = place;
        places.push(place);
    }

    function getPlace(uint256 index) public view returns(Place memory){
        return places[index];
    }

    function getPlaceByUser(address userAddress, uint256 index) public view returns(Place memory){
        return placeAddedByUser[userAddress][index];
    }
}