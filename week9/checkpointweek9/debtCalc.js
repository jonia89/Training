const os = require("os");
const fs = require("fs");

//const list = fs.readFileSync("debts.log").toString().split(os.eol);
//console.log(list);

const list = [
  {
    paymentId: "fc3a34e6-885e-4baf-8c67-3eeb4c3cd945",
    customer: "Dave's DinoLand",
    amountInEur: 97,
  },
  {
    paymentId: "00320009-d2d2-43de-8ac3-a82bad36f718",
    customer: "Carol's Car Wash",
    amountInEur: 51,
  },
  {
    paymentId: "cd44a829-e915-4f85-95bf-fe82dcd5df15",
    customer: "Carol's Car Wash",
    amountInEur: 57,
  },
  {
    paymentId: "59c2405a-7fc2-435e-a9b1-3065f783869c",
    customer: "Carol's Car Wash",
    amountInEur: 64,
  },
  {
    paymentId: "6efd0a05-dbb2-4632-bd2e-5872b8af020e",
    customer: "Carol's Car Wash",
    amountInEur: 67,
  },
  {
    paymentId: "3b38f6f1-b794-44f0-a555-772391021a56",
    customer: "Dave's DinoLand",
    amountInEur: 82,
  },
  {
    paymentId: "a1187475-b09f-494b-b17c-04a6cabee8f4",
    customer: "Bob's Bus Repair",
    amountInEur: 30,
  },
  {
    paymentId: "67788a55-7d7f-4720-9a9d-01e9da517ee0",
    customer: "Dave's DinoLand",
    amountInEur: 90,
  },
  {
    paymentId: "cedff2cb-3d4b-46a5-a405-8d7524ad8f99",
    customer: "Carol's Car Wash",
    amountInEur: 56,
  },
  {
    paymentId: "a87c4866-0045-496c-be54-d9afbc3454a3",
    customer: "Amanda's Almonds",
    amountInEur: 6,
  },
  {
    paymentId: "2457a286-2211-4cde-8c2a-0ffd742d481d",
    customer: "Amanda's Almonds",
    amountInEur: 13,
  },
  {
    paymentId: "f9aacbea-7f97-4927-b9d5-0b8ddd32d921",
    customer: "Amanda's Almonds",
    amountInEur: 7,
  },
  {
    paymentId: "19aa3c2f-308b-4f38-bc5e-93a6313ec9fb",
    customer: "Carol's Car Wash",
    amountInEur: 66,
  },
  {
    paymentId: "9c7e8653-5371-4dd2-bf2e-a3b0fd8e5c97",
    customer: "Bob's Bus Repair",
    amountInEur: 43,
  },
  {
    paymentId: "194a388e-07e6-4e97-9dc5-331cb235dab3",
    customer: "Amanda's Almonds",
    amountInEur: 8,
  },
  {
    paymentId: "6bdbb923-ea37-4bdd-a834-a88c0e39f58a",
    customer: "Amanda's Almonds",
    amountInEur: 19,
  },
  {
    paymentId: "b87e902a-28cd-4a35-9b35-e0ebb26e0eeb",
    customer: "Carol's Car Wash",
    amountInEur: 62,
  },
  {
    paymentId: "4a45abe3-643a-4fa9-8b63-8cf4381a3ebb",
    customer: "Dave's DinoLand",
    amountInEur: 79,
  },
  {
    paymentId: "d5af62a6-ff9b-4136-8be4-12523d6480d4",
    customer: "Bob's Bus Repair",
    amountInEur: 47,
  },
  {
    paymentId: "ffa31315-0f60-4ba2-8e49-b2f113552b36",
    customer: "Bob's Bus Repair",
    amountInEur: 32,
  },
  {
    paymentId: "27c2c973-237f-412e-8935-4e8b4d48e9a7",
    customer: "Dave's DinoLand",
    amountInEur: 94,
  },
  {
    paymentId: "cabd8a33-8825-4a61-8d0d-a3ac275776bc",
    customer: "Bob's Bus Repair",
    amountInEur: 30,
  },
  {
    paymentId: "204bb0b2-1d0f-44e0-9266-e6a976106a8a",
    customer: "Dave's DinoLand",
    amountInEur: 89,
  },
  {
    paymentId: "7423f48b-e813-4437-a0fd-b65476097bfd",
    customer: "Amanda's Almonds",
    amountInEur: 17,
  },
  {
    paymentId: "81a204be-8e81-40eb-9197-fdf09a9d7dab",
    customer: "Bob's Bus Repair",
    amountInEur: 29,
  },
  {
    paymentId: "e6ee8511-5037-4b3c-b2cc-f752e8fe51d1",
    customer: "Carol's Car Wash",
    amountInEur: 53,
  },
  {
    paymentId: "6c5bdd36-6ee9-43dc-ac60-1b494885a488",
    customer: "Carol's Car Wash",
    amountInEur: 53,
  },
  {
    paymentId: "d8b05012-4a54-4bd4-be55-607c94fd976b",
    customer: "Bob's Bus Repair",
    amountInEur: 32,
  },
  {
    paymentId: "c334a85d-bd2b-44a5-adac-20cc3f792f74",
    customer: "Amanda's Almonds",
    amountInEur: 4,
  },
  {
    paymentId: "a98159ca-ff06-45f0-8c7f-df3a80adc2f2",
    customer: "Dave's DinoLand",
    amountInEur: 92,
  },
  {
    paymentId: "dbd85c7f-49fd-4572-b24a-9eb8243924e6",
    customer: "Bob's Bus Repair",
    amountInEur: 30,
  },
  {
    paymentId: "1f52aad8-ca35-4fae-9768-93aa1ab9894a",
    customer: "Bob's Bus Repair",
    amountInEur: 30,
  },
  {
    paymentId: "36d493e5-268b-4018-abb5-d03171f87f81",
    customer: "Bob's Bus Repair",
    amountInEur: 39,
  },
  {
    paymentId: "fcac6760-5482-4e92-b565-820d3c27e338",
    customer: "Dave's DinoLand",
    amountInEur: 98,
  },
  {
    paymentId: "bfc24f55-8991-40d7-8c4e-d66f86e39902",
    customer: "Amanda's Almonds",
    amountInEur: 10,
  },
  {
    paymentId: "763115a3-dc50-467f-84e4-6b0a85e7f214",
    customer: "Amanda's Almonds",
    amountInEur: 10,
  },
  {
    paymentId: "1f9a04d6-fbf3-45c0-bee4-55ddd2771a0d",
    customer: "Carol's Car Wash",
    amountInEur: 57,
  },
  {
    paymentId: "7d0e5e18-168a-4694-8ee0-fff049df1d3a",
    customer: "Carol's Car Wash",
    amountInEur: 70,
  },
  {
    paymentId: "aa72976e-ed63-450f-a1c1-9c954326baef",
    customer: "Dave's DinoLand",
    amountInEur: 93,
  },
  {
    paymentId: "76c09fa7-1a3f-4ea9-a20a-0777b4863d63",
    customer: "Carol's Car Wash",
    amountInEur: 72,
  },
  {
    paymentId: "3170cecc-eb49-4027-8b28-ec1dbdb48953",
    customer: "Bob's Bus Repair",
    amountInEur: 34,
  },
  {
    paymentId: "65fd63a5-4eb1-47bd-93cf-e95140e4c593",
    customer: "Dave's DinoLand",
    amountInEur: 98,
  },
  {
    paymentId: "78ce7bd9-bcac-4b1f-90dc-18e4d2d89378",
    customer: "Amanda's Almonds",
    amountInEur: 24,
  },
  {
    paymentId: "5d8cb32b-446d-4d2b-a747-3a9fbab5ba7a",
    customer: "Dave's DinoLand",
    amountInEur: 79,
  },
  {
    paymentId: "a4bef5e7-aa2b-4af6-ae4f-6652b7911f1a",
    customer: "Amanda's Almonds",
    amountInEur: 14,
  },
  {
    paymentId: "7d840111-e302-45c8-a89e-e93c5570cb14",
    customer: "Dave's DinoLand",
    amountInEur: 78,
  },
  {
    paymentId: "11ed9383-bc0f-4f66-8f39-736a18db9539",
    customer: "Bob's Bus Repair",
    amountInEur: 39,
  },
  {
    paymentId: "61b4079a-9025-46f5-b511-e30433cbf98d",
    customer: "Amanda's Almonds",
    amountInEur: 13,
  },
  {
    paymentId: "feae4fc4-5ffc-49ea-84e7-79596c294ff8",
    customer: "Carol's Car Wash",
    amountInEur: 63,
  },
  {
    paymentId: "5bf96e33-c2ce-438b-9ee9-f3194e88848f",
    customer: "Carol's Car Wash",
    amountInEur: 55,
  },
  {
    paymentId: "7d93a29a-beb7-4f9c-b985-6a4f7a5de868",
    customer: "Amanda's Almonds",
    amountInEur: 24,
  },
  {
    paymentId: "71e1e8a0-7a43-4547-af3c-d3014552f2fa",
    customer: "Carol's Car Wash",
    amountInEur: 63,
  },
  {
    paymentId: "eac07ff2-f4da-4918-8454-b6d58412c015",
    customer: "Carol's Car Wash",
    amountInEur: 56,
  },
  {
    paymentId: "76a18fa4-8b9b-4025-acca-fe841de7a621",
    customer: "Carol's Car Wash",
    amountInEur: 58,
  },
  {
    paymentId: "c8efa664-85f1-4df3-a8bf-d2ae08670869",
    customer: "Dave's DinoLand",
    amountInEur: 91,
  },
  {
    paymentId: "fe86ecb7-c8e7-4dc1-9497-07c5dad7f55a",
    customer: "Bob's Bus Repair",
    amountInEur: 42,
  },
  {
    paymentId: "7686a4e2-e19c-4abe-9b8c-fe06a72e371d",
    customer: "Bob's Bus Repair",
    amountInEur: 43,
  },
  {
    paymentId: "77b874f8-8188-4e21-865a-11b2d82fca32",
    customer: "Carol's Car Wash",
    amountInEur: 67,
  },
  {
    paymentId: "1a1a532e-49e7-47bd-ba43-b874574b7fc3",
    customer: "Bob's Bus Repair",
    amountInEur: 35,
  },
  {
    paymentId: "23f3715a-94cc-4d40-95fe-9ba6404a38a6",
    customer: "Bob's Bus Repair",
    amountInEur: 48,
  },
  {
    paymentId: "85af5ad6-ffd4-4528-9762-3e2721f64134",
    customer: "Bob's Bus Repair",
    amountInEur: 38,
  },
  {
    paymentId: "07548998-e9b6-44f1-8897-7e839eaf62fd",
    customer: "Dave's DinoLand",
    amountInEur: 89,
  },
  {
    paymentId: "2186c821-5c53-4809-abd5-c6bec9cac6f6",
    customer: "Dave's DinoLand",
    amountInEur: 91,
  },
  {
    paymentId: "681dc7d5-7e44-41ee-8ff9-9ff4c140b2bf",
    customer: "Carol's Car Wash",
    amountInEur: 72,
  },
  {
    paymentId: "07fbe35a-ec2a-4436-92e6-c68c5335cbb9",
    customer: "Amanda's Almonds",
    amountInEur: 7,
  },
  {
    paymentId: "b03e30b7-14d4-41cd-9a64-fe633e9eccee",
    customer: "Amanda's Almonds",
    amountInEur: 19,
  },
  {
    paymentId: "a09ee85c-3e56-4d29-ba68-5ddefc00a833",
    customer: "Carol's Car Wash",
    amountInEur: 62,
  },
  {
    paymentId: "46c42151-e5e3-4684-82cd-e9f25721f84d",
    customer: "Bob's Bus Repair",
    amountInEur: 34,
  },
  {
    paymentId: "06270669-9265-4ab3-b701-eda4b5967a15",
    customer: "Dave's DinoLand",
    amountInEur: 86,
  },
  {
    paymentId: "377842f1-b78b-4e2c-87e6-e6ea47280653",
    customer: "Dave's DinoLand",
    amountInEur: 88,
  },
  {
    paymentId: "b0674e97-9597-4ffe-ae2b-3e8ba930ea54",
    customer: "Amanda's Almonds",
    amountInEur: 21,
  },
  {
    paymentId: "35b9c278-9ef9-4104-8cc1-7ceb741bb70a",
    customer: "Dave's DinoLand",
    amountInEur: 93,
  },
  {
    paymentId: "5ee54406-99ed-4e50-b2e2-82559d648cce",
    customer: "Dave's DinoLand",
    amountInEur: 88,
  },
  {
    paymentId: "77c4f3d0-e9bd-4cd3-ae17-c04d7f6a5068",
    customer: "Carol's Car Wash",
    amountInEur: 59,
  },
  {
    paymentId: "5cadb996-4f70-4ba4-abc2-f42b55b82841",
    customer: "Dave's DinoLand",
    amountInEur: 78,
  },
  {
    paymentId: "215c7756-85a7-4bdd-84d0-1b670e484fc5",
    customer: "Dave's DinoLand",
    amountInEur: 78,
  },
  {
    paymentId: "fd5bc524-0377-4319-b6d4-9b6131cfda5a",
    customer: "Bob's Bus Repair",
    amountInEur: 44,
  },
  {
    paymentId: "6b3f1b2c-6262-41bd-8396-82f70a8de841",
    customer: "Amanda's Almonds",
    amountInEur: 17,
  },
  {
    paymentId: "7bbd4ff2-2424-4cdb-8482-0edf98a51132",
    customer: "Carol's Car Wash",
    amountInEur: 70,
  },
  {
    paymentId: "47977ea3-1730-4088-aa4b-377be1a193db",
    customer: "Dave's DinoLand",
    amountInEur: 90,
  },
  {
    paymentId: "cbf81aab-11d1-4a36-b380-6a190a63b857",
    customer: "Dave's DinoLand",
    amountInEur: 78,
  },
  {
    paymentId: "8c08e696-4b1c-4b40-a7e9-bc5035e7b2d5",
    customer: "Amanda's Almonds",
    amountInEur: 17,
  },
  {
    paymentId: "7538a7f9-939a-4f4f-ac34-631e8fd662bf",
    customer: "Bob's Bus Repair",
    amountInEur: 32,
  },
  {
    paymentId: "fd052a9a-f2f6-4e24-b313-4a81baf92e06",
    customer: "Dave's DinoLand",
    amountInEur: 82,
  },
  {
    paymentId: "8bd4ff2c-2884-4201-bdaa-99b69bc4dacc",
    customer: "Carol's Car Wash",
    amountInEur: 67,
  },
  {
    paymentId: "5d81d772-ec13-479d-9091-4933d4401875",
    customer: "Carol's Car Wash",
    amountInEur: 65,
  },
  {
    paymentId: "3a130f17-0158-47f9-bce1-ad251d1ec8b7",
    customer: "Bob's Bus Repair",
    amountInEur: 44,
  },
  {
    paymentId: "6f3b9f99-9993-4267-bba6-9541bf040094",
    customer: "Bob's Bus Repair",
    amountInEur: 29,
  },
  {
    paymentId: "e43cce7d-bfc2-4844-908d-3ce082928611",
    customer: "Amanda's Almonds",
    amountInEur: 4,
  },
  {
    paymentId: "2f4ef801-870f-4507-8f62-23e3ab4d019c",
    customer: "Dave's DinoLand",
    amountInEur: 85,
  },
  {
    paymentId: "1ffa7602-5ef6-4bee-9a5f-79aa6e05af1b",
    customer: "Bob's Bus Repair",
    amountInEur: 35,
  },
  {
    paymentId: "92b518c2-ad12-483d-8ffa-937bcb5c9ff1",
    customer: "Carol's Car Wash",
    amountInEur: 56,
  },
  {
    paymentId: "85b88a4c-2bac-415f-894c-dd6721367b89",
    customer: "Carol's Car Wash",
    amountInEur: 57,
  },
  {
    paymentId: "d1f3c21a-18e4-4852-808e-50c64160e515",
    customer: "Amanda's Almonds",
    amountInEur: 9,
  },
  {
    paymentId: "94701c72-361c-4d6f-9d18-bced9d36ae6a",
    customer: "Bob's Bus Repair",
    amountInEur: 47,
  },
  {
    paymentId: "378f6283-1f99-4ee8-ae7a-ee9c68b2cd23",
    customer: "Dave's DinoLand",
    amountInEur: 94,
  },
  {
    paymentId: "a047aced-0a48-4df3-bcf2-bf18ecd10753",
    customer: "Bob's Bus Repair",
    amountInEur: 43,
  },
  {
    paymentId: "7366b645-71e0-4570-bc04-4a9ae5c5e3f3",
    customer: "Amanda's Almonds",
    amountInEur: 4,
  },
  {
    paymentId: "7dca666e-dc94-4a4e-9b22-eadfd25b19d6",
    customer: "Carol's Car Wash",
    amountInEur: 55,
  },
  {
    paymentId: "82baaeab-6337-447a-8512-a7795dca76c9",
    customer: "Bob's Bus Repair",
    amountInEur: 47,
  },
  {
    paymentId: "3f47be7b-50fb-42a5-b701-d297be5b92cf",
    customer: "Amanda's Almonds",
    amountInEur: 25,
  },
  {
    paymentId: "b599e62e-e670-449c-962b-81702e5db72d",
    customer: "Amanda's Almonds",
    amountInEur: 5,
  },
]; 

function calcCompDebt(list) {
  let customers = {};
  list.forEach((element) => {
    customers[element.customer] =
      (customers[element.customer] || 0) + element.amountInEur;
  });
  return customers;
}

function calcDebt(list) {
  let debt = 0;
  list.forEach((list) => {
    debt += list.amountInEur;
  });
  return debt;
}

console.log(calcCompDebt(list));
console.log("Total debt: ", calcDebt(list));
