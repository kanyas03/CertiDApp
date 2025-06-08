// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

contract cert{
    struct certificate{
        string name;
        string course;
        string grade;
        string date;
    }
    address admin;
    event issue(string indexed,uint256,string);
    constructor(){
        admin =msg.sender;
    }
    modifier onlyAdmin(){
        require(admin==msg.sender, "Only Admin");_;
    }
     mapping (uint256=>certificate)public certificates; 
     
    function addcertification(
        uint256 _id,
        string memory _name, 
        string memory _course, 
        string memory _grade, 
        string memory _date)public onlyAdmin{
            certificates[_id] = certificate(_name,_course,_grade,_date);
        emit issue(_course,_id,_grade);
    }   
}
