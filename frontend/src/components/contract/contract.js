export const CONTRACT_ADDRESS =  "0xD0577707566E1dF425C37f45dae4Ea7262C22F7A"

export const CONTRACT_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkIfAdmin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllColleges",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "cid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "collegeName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "collegeAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "tel",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "website",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "aicteCertified",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "mhrdCertified",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "flag",
						"type": "bool"
					}
				],
				"internalType": "struct Information.College[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllStudents",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "sid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fatherName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "motherName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfBirth",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "emailId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "collegeName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "level",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "course",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mobileNumber",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "flag",
						"type": "bool"
					}
				],
				"internalType": "struct Information.Student[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getCollegeById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "cid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "collegeName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "collegeAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "tel",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "website",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "aicteCertified",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "mhrdCertified",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "flag",
						"type": "bool"
					}
				],
				"internalType": "struct Information.College",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_uid",
				"type": "uint256"
			}
		],
		"name": "getStudentByID",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "sid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fatherName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "motherName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "gender",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfBirth",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "emailId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "collegeName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "level",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "course",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mobileNumber",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "flag",
						"type": "bool"
					}
				],
				"internalType": "struct Information.Student",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_collegeName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tel",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_website",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_aicteCertified",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_mhrdCertified",
				"type": "bool"
			}
		],
		"name": "registerCollege",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_fatherName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_motherName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_collegeName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_level",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_course",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_mobileNumber",
				"type": "string"
			}
		],
		"name": "registerStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]