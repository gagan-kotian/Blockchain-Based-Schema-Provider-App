// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract May {
    struct Memo {
        string name;
        string usn;
        string googleDriveLink;
        string branch;
        string subject;
        string message;
        uint256 timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(string memory name, string memory usn, string memory googleDriveLink, string memory branch, string memory subject, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, usn, googleDriveLink, branch, subject, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        require(memos.length > 0, "Empty");
        return memos;
    }
}
