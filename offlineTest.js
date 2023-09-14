const { isEmpty } = require('lodash')
const data = [
    {
      "_id": "6131f73b84e66e8d628fc1a3",
      "atlasId": "69570c93-4dd5-43cb-9cc2-aceafc03d46c",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasCode": "69570c93-4dd5-43cb-9cc2-aceafc03d46c",
      "code": "V2WYOSFX",
      "course": {
        "id": "6131f73b84e66e8d628fc121",
        "name": "Lifeguard (CTE Intro)"
      },
      "createdAt": 1630664507057,
      "description": null,
      "endDate": 1658275199999,
      "entity": {
        "id": ""
      },
      "grade_levels": [
        "10",
        "11"
      ],
      "grades": [
        "11"
      ],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "locale": null,
      "name": "Lifeguard (CTE Intro) - 4(A)",
      "parent_id": "6a840341-17bc-4ff9-9f55-b15bbfacf77e",
      "parent_type": "school",
      "periods": [
        "4(A)"
      ],
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1630664507052,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "subjects": [],
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "time_zone": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "6131f73b84e66e8d628fc1a3",
      "parent": {},
      "primaryTeacherId": null,
      "tags": [],
      "teacher": null,
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "course_id": "7b1fbc5a-41ad-481f-a301-dc1a29d794bc",
      "owners": [],
      "atlasClassId": null,
      "identifiers": []
    },
    {
      "_id": "6131f73b84e66e8d628fc978",
      "atlasId": "5759c8c4-dbf3-48a7-a5d1-08abb4d0573d",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasCode": "5759c8c4-dbf3-48a7-a5d1-08abb4d0573d",
      "code": "V26T7I8R",
      "course": {
        "id": "6131f73b84e66e8d628fc8fc",
        "name": "Early Departure"
      },
      "createdAt": 1630664507784,
      "description": null,
      "endDate": 1658275199999,
      "entity": {
        "id": ""
      },
      "grade_levels": [
        "12"
      ],
      "grades": [
        "12"
      ],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "locale": null,
      "name": "Early Departure - 6(A)",
      "parent_id": "6a840341-17bc-4ff9-9f55-b15bbfacf77e",
      "parent_type": "school",
      "periods": [
        "6(A)"
      ],
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1630664507780,
      "state": "active",
      "studentCount": 28,
      "subject": "Other Subjects",
      "subjects": [],
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "time_zone": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643713305161,
      "classId": "6131f73b84e66e8d628fc978",
      "parent": {},
      "primaryTeacherId": null,
      "tags": [],
      "teacher": null,
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "course_id": "1d5bdd21-6d88-44e7-be69-b948509c5dd6",
      "owners": [],
      "atlasClassId": null,
      "identifiers": []
    },
    {
      "_id": "614968b484e66e8d62a2b0ce",
      "atlasId": "ed4d8173-5738-47cf-be0f-f8f8867af06f",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasCode": "ed4d8173-5738-47cf-be0f-f8f8867af06f",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "5331cd6e-18f8-4985-b7e3-39f2b4739171"
      ],
      "code": "V2L272SI",
      "course": {
        "id": "6131f68084e66e8d62880ffd",
        "name": "Community Experience"
      },
      "course_id": "3bc8bde4-47e1-4469-bb42-e3092d2a674f",
      "createdAt": 1632200884626,
      "endDate": 1658275199999,
      "grades": [
        "8"
      ],
      "institutionId": "5f1d9ac15dd16ded172dcfec",
      "institutionName": "La Merced Intermediate",
      "name": "Community Experience - 2(A)",
      "owners": [],
      "primaryTeacherId": null,
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1632200884575,
      "state": "active",
      "studentCount": 6,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "atlasClassId": null,
      "classId": "614968b484e66e8d62a2b0ce",
      "parent": {},
      "tags": [],
      "identifiers": []
    },
    {
      "_id": "614968e484e66e8d62a5ef74",
      "atlasId": "647cf372-b8a1-426a-a23b-9d379912f97a",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasCode": "647cf372-b8a1-426a-a23b-9d379912f97a",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "5331cd6e-18f8-4985-b7e3-39f2b4739171"
      ],
      "code": "V2Y6GD6H",
      "course": {
        "id": "6131f68084e66e8d62880ffd",
        "name": "Community Experience"
      },
      "course_id": "3bc8bde4-47e1-4469-bb42-e3092d2a674f",
      "createdAt": 1632200932396,
      "endDate": 1658275199999,
      "grades": [
        "8"
      ],
      "institutionId": "5f1d9ac15dd16ded172dcfec",
      "institutionName": "La Merced Intermediate",
      "name": "Community Experience - 1(A)",
      "owners": [],
      "primaryTeacherId": null,
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1632200932349,
      "state": "active",
      "studentCount": 2,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "atlasClassId": null,
      "classId": "614968e484e66e8d62a5ef74",
      "parent": {},
      "tags": [],
      "identifiers": []
    },
    {
      "_id": "618ba67f84e66e8d62df680c",
      "atlasId": "63c78297-1310-4314-a21b-720d6a8ef0ea",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "63c78297-1310-4314-a21b-720d6a8ef0ea",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V2TUOC74",
      "course": {
        "id": "618ba67f84e66e8d62df67f7",
        "name": "Early Departure"
      },
      "course_id": "30ef9883-fbc8-44d0-8ff4-705fdcba9613",
      "createdAt": 1636542079489,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Early Departure - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542079434,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba67f84e66e8d62df680c",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "618ba68384e66e8d62df88dd",
      "atlasId": "4748786c-60d8-4cad-afa0-2ec597ade313",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "4748786c-60d8-4cad-afa0-2ec597ade313",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V2BPHV1K",
      "course": {
        "id": "6131f67184e66e8d62878562",
        "name": "Home Instruction Attendance"
      },
      "course_id": "8e9e2c04-a25b-4cf4-a386-8aec4994375a",
      "createdAt": 1636542083043,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Home Instruction Attendance - 7(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542082990,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba68384e66e8d62df88dd",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "618ba68384e66e8d62df89d8",
      "atlasId": "c61514e8-0854-498d-a4dc-46125819f7d0",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "c61514e8-0854-498d-a4dc-46125819f7d0",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V2J3Z3N6",
      "course": {
        "id": "6131f66a84e66e8d62873726",
        "name": "Functional English"
      },
      "course_id": "3e2cad24-41de-4569-aa59-268c216cb307",
      "createdAt": 1636542083155,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Functional English - 1(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542083106,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba68384e66e8d62df89d8",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "618ba68384e66e8d62df8ac8",
      "atlasId": "6a4afa54-1d15-42de-bc59-616d344433b9",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "6a4afa54-1d15-42de-bc59-616d344433b9",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V2LE41U8",
      "course": {
        "id": "6131f63a84e66e8d6284d923",
        "name": "Physical Education 7"
      },
      "course_id": "0c3d9bd8-fb5b-44c5-bc75-46b89c70a069",
      "createdAt": 1636542083270,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Physical Education 7 - 2(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542083217,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba68384e66e8d62df8ac8",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "618ba68384e66e8d62df8bbb",
      "atlasId": "b2128e57-fb73-4b9a-9ad4-b5e7c2227752",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "b2128e57-fb73-4b9a-9ad4-b5e7c2227752",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V2Q4M6NB",
      "course": {
        "id": "6131f63c84e66e8d6285017a",
        "name": "Functional Social Science"
      },
      "course_id": "9cd6f8de-1426-4947-8c37-a824e2d7af5f",
      "createdAt": 1636542083381,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Functional Social Science - 3(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542083332,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba68384e66e8d62df8bbb",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "618ba68384e66e8d62df8cbc",
      "atlasId": "990016cd-8d50-45a9-9da3-0243a4b36706",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "990016cd-8d50-45a9-9da3-0243a4b36706",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V2QZZ26Z",
      "course": {
        "id": "6131f67284e66e8d62878ce8",
        "name": "Functional Mathematics"
      },
      "course_id": "7126d457-05da-45f8-a598-7a4fd31efbf4",
      "createdAt": 1636542083493,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Functional Mathematics - 4(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542083441,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba68384e66e8d62df8cbc",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "618ba68384e66e8d62df8dd3",
      "atlasId": "fcbd7c70-3573-4a2d-864c-fdcc3756f7e5",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "fcbd7c70-3573-4a2d-864c-fdcc3756f7e5",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V2ZP9O2N",
      "course": {
        "id": "61656a7c84e66e8d6244ff27",
        "name": "Community Experience"
      },
      "course_id": "861a0e86-e133-4489-afff-b7e375b4c9ac",
      "createdAt": 1636542083608,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Community Experience - 5(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542083558,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba68384e66e8d62df8dd3",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "618ba68384e66e8d62df8ed1",
      "atlasId": "97fcf2ae-d335-4a0b-b6c6-6f1c530835df",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "97fcf2ae-d335-4a0b-b6c6-6f1c530835df",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "cb4ea253-f599-48be-a384-9faa69375f25"
      ],
      "code": "V244XZQH",
      "course": {
        "id": "6131f63884e66e8d6284c2bf",
        "name": "Functional Science"
      },
      "course_id": "1576d109-de63-4a49-85e1-807317723758",
      "createdAt": 1636542083729,
      "endDate": 1658275199999,
      "grades": [
        "7"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dd130",
      "institutionName": "Montebello Intermediate",
      "name": "Functional Science - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1636542083679,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "618ba68384e66e8d62df8ed1",
      "owners": [],
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61938fe084e66e8d62568831",
      "atlasId": "ffb27b75-e879-41c1-9676-afcf259f3b52",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "ffb27b75-e879-41c1-9676-afcf259f3b52",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "code": "V2ZB9AXY",
      "course": {
        "id": "61431f1184e66e8d6206bb43",
        "name": "Functional English"
      },
      "course_id": "263adba5-567b-43b0-a047-7189e8086088",
      "createdAt": 1637060576444,
      "endDate": 1658275199999,
      "grades": [
        "9",
        "10",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "name": "Functional English - 1(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1637060576395,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61938fe084e66e8d62568831",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61938fe084e66e8d62568930",
      "atlasId": "391d110e-0c09-4dde-a95a-91049bf5cd8d",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "391d110e-0c09-4dde-a95a-91049bf5cd8d",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "code": "V2OTOJ5C",
      "course": {
        "id": "6149691984e66e8d62aa3471",
        "name": "Community Experience"
      },
      "course_id": "3bbf6538-0659-4002-a642-0d6607d5c645",
      "createdAt": 1637060576565,
      "endDate": 1658275199999,
      "grades": [
        "9",
        "10",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "name": "Community Experience - 2(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1637060576499,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61938fe084e66e8d62568930",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61938fe084e66e8d62568a29",
      "atlasId": "1aef2fe1-1831-4dad-b799-4551611bf3c4",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "1aef2fe1-1831-4dad-b799-4551611bf3c4",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "code": "V2IFNBOK",
      "course": {
        "id": "6131f73184e66e8d628f591b",
        "name": "Functional Math"
      },
      "course_id": "26b41611-7650-4643-b6f1-8ffd08c56c12",
      "createdAt": 1637060576681,
      "endDate": 1658275199999,
      "grades": [
        "9",
        "10",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "name": "Functional Math - 3(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1637060576629,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61938fe084e66e8d62568a29",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61938fe084e66e8d62568b49",
      "atlasId": "66cb22c6-2426-45d4-86ec-b71447c7387a",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "66cb22c6-2426-45d4-86ec-b71447c7387a",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "code": "V24G3ISM",
      "course": {
        "id": "6149691984e66e8d62aa3471",
        "name": "Community Experience"
      },
      "course_id": "3bbf6538-0659-4002-a642-0d6607d5c645",
      "createdAt": 1637060576785,
      "endDate": 1658275199999,
      "grades": [
        "9",
        "10",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "name": "Community Experience - 4(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1637060576736,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61938fe084e66e8d62568b49",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61938fe084e66e8d62568c5b",
      "atlasId": "29ace01d-8acd-4538-a641-9ea5b0f3e57e",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "29ace01d-8acd-4538-a641-9ea5b0f3e57e",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "code": "V249VM8I",
      "course": {
        "id": "6149693184e66e8d62ac5db2",
        "name": "Functional Science"
      },
      "course_id": "84dd1cc7-ddf6-447f-b3ee-7e24cae8cfcc",
      "createdAt": 1637060576892,
      "endDate": 1658275199999,
      "grades": [
        "9",
        "10",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "name": "Functional Science - 5(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1637060576840,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61938fe084e66e8d62568c5b",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61938fe084e66e8d62568d9e",
      "atlasId": "33e2b9c2-53fe-4d4d-938e-4d9a7d3a550e",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "33e2b9c2-53fe-4d4d-938e-4d9a7d3a550e",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "code": "V24YFA7D",
      "course": {
        "id": "6149691984e66e8d62aa3471",
        "name": "Community Experience"
      },
      "course_id": "3bbf6538-0659-4002-a642-0d6607d5c645",
      "createdAt": 1637060576997,
      "endDate": 1658275199999,
      "grades": [
        "9",
        "10"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "name": "Community Experience - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1637060576948,
      "state": "active",
      "studentCount": 2,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61938fe084e66e8d62568d9e",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61af3f1784e66e8d6235c426",
      "atlasId": "b2f70e3f-bc91-4cb9-9877-f98833cc24d2",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "b2f70e3f-bc91-4cb9-9877-f98833cc24d2",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9178b78f-9030-492b-85d1-3056190bb1e1"
      ],
      "code": "V2N7EYSI",
      "course": {
        "id": "6131f69384e66e8d6288cf35",
        "name": "Life Management"
      },
      "course_id": "b6571544-e6c2-4db1-9ce9-b55423c21862",
      "createdAt": 1638874903304,
      "endDate": 1658275199999,
      "grades": [
        "6"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac05dd16ded172dcc93",
      "institutionName": "Macy Intermediate",
      "name": "Life Management - 1(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1638874903242,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61af3f1784e66e8d6235c426",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61af3f1784e66e8d6235c553",
      "atlasId": "b65b859c-9020-4dd8-8689-5e7a4b00b0b6",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "b65b859c-9020-4dd8-8689-5e7a4b00b0b6",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9178b78f-9030-492b-85d1-3056190bb1e1"
      ],
      "code": "V2BLCJL1",
      "course": {
        "id": "6131f68984e66e8d62886afd",
        "name": "Functional Science"
      },
      "course_id": "5a333494-577e-48c9-afed-a5bf80f32c71",
      "createdAt": 1638874903438,
      "endDate": 1658275199999,
      "grades": [
        "6"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac05dd16ded172dcc93",
      "institutionName": "Macy Intermediate",
      "name": "Functional Science - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1638874903380,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61af3f1784e66e8d6235c553",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61af3f1784e66e8d6235c67a",
      "atlasId": "dee3cf4d-b6ed-459d-9b1a-9442d0843198",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "dee3cf4d-b6ed-459d-9b1a-9442d0843198",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9178b78f-9030-492b-85d1-3056190bb1e1"
      ],
      "code": "V2RCU020",
      "course": {
        "id": "6131f68e84e66e8d62889f61",
        "name": "Functional Social Science"
      },
      "course_id": "9000c417-9b90-46fb-860c-3568cdfdb798",
      "createdAt": 1638874903561,
      "endDate": 1658275199999,
      "grades": [
        "6"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac05dd16ded172dcc93",
      "institutionName": "Macy Intermediate",
      "name": "Functional Social Science - 4(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1638874903506,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61af3f1784e66e8d6235c67a",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61af3f1784e66e8d6235c7b1",
      "atlasId": "145b4a32-cb2c-425f-88f9-d3eb2b47aa84",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "145b4a32-cb2c-425f-88f9-d3eb2b47aa84",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9178b78f-9030-492b-85d1-3056190bb1e1"
      ],
      "code": "V2JEX125",
      "course": {
        "id": "6131f68984e66e8d62887096",
        "name": "Physical Education 6"
      },
      "course_id": "916898be-b961-42e9-bd29-d99339907e25",
      "createdAt": 1638874903683,
      "endDate": 1658275199999,
      "grades": [
        "6"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac05dd16ded172dcc93",
      "institutionName": "Macy Intermediate",
      "name": "Physical Education 6 - 3(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1638874903630,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61af3f1784e66e8d6235c7b1",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61af3f1784e66e8d6235c8ca",
      "atlasId": "f09569a5-0f74-4011-9a8f-1aee6883a82c",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "f09569a5-0f74-4011-9a8f-1aee6883a82c",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9178b78f-9030-492b-85d1-3056190bb1e1"
      ],
      "code": "V2WKBULL",
      "course": {
        "id": "6131f68684e66e8d62884c2f",
        "name": "Functional Mathematics"
      },
      "course_id": "06018143-e34a-41eb-87e7-0f9182e24a43",
      "createdAt": 1638874903804,
      "endDate": 1658275199999,
      "grades": [
        "6"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac05dd16ded172dcc93",
      "institutionName": "Macy Intermediate",
      "name": "Functional Mathematics - 5(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1638874903749,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61af3f1784e66e8d6235c8ca",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61af3f1884e66e8d6235d330",
      "atlasId": "e268174a-84aa-4572-9146-9b25f6664dcd",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "e268174a-84aa-4572-9146-9b25f6664dcd",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9178b78f-9030-492b-85d1-3056190bb1e1"
      ],
      "code": "V279MXJ2",
      "course": {
        "id": "6131f65d84e66e8d62869e5b",
        "name": "Functional English"
      },
      "course_id": "d6e8846e-c0a1-4c62-8f46-596100b149f1",
      "createdAt": 1638874904747,
      "endDate": 1658275199999,
      "grades": [
        "6"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac05dd16ded172dcc93",
      "institutionName": "Macy Intermediate",
      "name": "Functional English - 2(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1638874904691,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61af3f1884e66e8d6235d330",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61af3f1884e66e8d6235d4c0",
      "atlasId": "778181d0-2710-46ee-ae5b-8989b470f8d4",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "778181d0-2710-46ee-ae5b-8989b470f8d4",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9178b78f-9030-492b-85d1-3056190bb1e1"
      ],
      "code": "V205N7XQ",
      "course": {
        "id": "6131f69384e66e8d6288cb93",
        "name": "Home Instruction Attendance"
      },
      "course_id": "091e4026-1dd6-42f3-b89a-3103ceed2062",
      "createdAt": 1638874904887,
      "endDate": 1658275199999,
      "grades": [
        "6"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac05dd16ded172dcc93",
      "institutionName": "Macy Intermediate",
      "name": "Home Instruction Attendance - 7(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1638874904832,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61af3f1884e66e8d6235d4c0",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61b4850d84e66e8d62aecf54",
      "atlasId": "910bb8c3-5a11-4700-b3b3-a153d2d57212",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "910bb8c3-5a11-4700-b3b3-a153d2d57212",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V21VQMK4",
      "course": {
        "id": "61435c6184e66e8d6276e914",
        "name": "Home Instruction Attendance"
      },
      "course_id": "46b2cbfe-0882-4d35-b841-7c2190ab61b9",
      "createdAt": 1639220493793,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Home Instruction Attendance - 7(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639220493739,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61b4850d84e66e8d62aecf54",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61b4850d84e66e8d62aed03a",
      "atlasId": "92ddbb88-dead-4526-8efa-4768171baa9c",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "92ddbb88-dead-4526-8efa-4768171baa9c",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V2RQCZZK",
      "course": {
        "id": "6131f7c884e66e8d62957bd3",
        "name": "Academic Skills"
      },
      "course_id": "02c5964b-dea2-4991-a179-a5b800613eb2",
      "createdAt": 1639220493914,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Academic Skills - 5(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639220493859,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61b4850d84e66e8d62aed03a",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61b4850e84e66e8d62aed0d1",
      "atlasId": "ceb4d199-3902-4236-b33f-09c6ac46ae9f",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "ceb4d199-3902-4236-b33f-09c6ac46ae9f",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V2EC2ESQ",
      "course": {
        "id": "6131f7b784e66e8d6294d05b",
        "name": "Functional Math"
      },
      "course_id": "d54cce3b-0bdb-4cb4-939f-db3edff5a268",
      "createdAt": 1639220494036,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Functional Math - 3(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639220493981,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61b4850e84e66e8d62aed0d1",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61b4850e84e66e8d62aed183",
      "atlasId": "ef5451a8-e1cb-405a-9f29-2dc3fc9bb710",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "ef5451a8-e1cb-405a-9f29-2dc3fc9bb710",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V2P6QTR8",
      "course": {
        "id": "6131f7b984e66e8d6294e48a",
        "name": "Functional English"
      },
      "course_id": "dc63821c-2d16-411d-98ee-9b873122e5a9",
      "createdAt": 1639220494156,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Functional English - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639220494099,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61b4850e84e66e8d62aed183",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61b4850e84e66e8d62aed24c",
      "atlasId": "a435b5ae-7c46-42aa-8296-228993253e54",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "a435b5ae-7c46-42aa-8296-228993253e54",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V2RLTKBH",
      "course": {
        "id": "6131f7bb84e66e8d6294f3ed",
        "name": "Physical Education"
      },
      "course_id": "bb632bc9-c1b2-4d3e-9861-12c360ae2844",
      "createdAt": 1639220494285,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Physical Education - 2(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639220494233,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61b4850e84e66e8d62aed24c",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61b4850e84e66e8d62aed2dc",
      "atlasId": "d86f48ee-dedf-42f9-b3e2-f0e13dd7f349",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "d86f48ee-dedf-42f9-b3e2-f0e13dd7f349",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V21KRAJP",
      "course": {
        "id": "6131f7b884e66e8d6294da36",
        "name": "Functional Science"
      },
      "course_id": "ba03f6a8-17a0-431f-afc3-98ae42deba46",
      "createdAt": 1639220494403,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Functional Science - 1(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639220494352,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61b4850e84e66e8d62aed2dc",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61b4850e84e66e8d62aed373",
      "atlasId": "afcbe668-765f-422d-b9d6-6261feb89ebc",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "afcbe668-765f-422d-b9d6-6261feb89ebc",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V25S051E",
      "course": {
        "id": "6131f7ba84e66e8d6294eda8",
        "name": "Community Experience"
      },
      "course_id": "c7c33e10-5008-4131-90b7-5c13da796954",
      "createdAt": 1639220494518,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Community Experience - 4(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639220494465,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61b4850e84e66e8d62aed373",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61bc6e4084e66e8d621e18f8",
      "atlasId": "07956bb5-77cb-460a-b6b8-1462fd4da0f8",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "07956bb5-77cb-460a-b6b8-1462fd4da0f8",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "fc8b9ffb-cbf9-43ba-abca-2b6e23c11b5b"
      ],
      "code": "V225OOO6",
      "course": {
        "id": "6149692a84e66e8d62abba91",
        "name": "Home Instruction Attendance"
      },
      "course_id": "380a3a4a-5010-4957-8b25-675f8106f01d",
      "createdAt": 1639738944245,
      "endDate": 1658275199999,
      "grades": [
        "9",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac25dd16ded172dd687",
      "institutionName": "Schurr High",
      "name": "Home Instruction Attendance - 10(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1639738944185,
      "state": "active",
      "studentCount": 2,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048,
      "classId": "61bc6e4084e66e8d621e18f8",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61e2a9af84e66e8d62828d64",
      "atlasId": "6848795f-d7e3-410b-832a-bb64d790fb44",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "6848795f-d7e3-410b-832a-bb64d790fb44",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V2A3XW01",
      "course": {
        "id": "6149690484e66e8d62a86d18",
        "name": "Home Instruction Attendance"
      },
      "course_id": "df5dc300-7185-4b96-821e-2c2707e3d7b4",
      "createdAt": 1642244527411,
      "endDate": 1658275199999,
      "grades": [
        "11",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Home Instruction Attendance - 8(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642244527349,
      "state": "active",
      "studentCount": 2,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643540520261,
      "classId": "61e2a9af84e66e8d62828d64",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61e7efce84e66e8d6210c022",
      "atlasId": "07910323-8eb8-4f29-ab20-fa741b69ba96",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "07910323-8eb8-4f29-ab20-fa741b69ba96",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V2ZUJ5AB",
      "course": {
        "id": "6131f6cb84e66e8d628b2bb5",
        "name": "Functional Math"
      },
      "course_id": "ee59ff5c-84f3-42ca-888a-bc188d9c88ef",
      "createdAt": 1642590158442,
      "endDate": 1658275199999,
      "grades": [
        "11",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Functional Math - 1(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642590158374,
      "state": "active",
      "studentCount": 2,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643627935648,
      "classId": "61e7efce84e66e8d6210c022",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61e7efce84e66e8d6210c041",
      "atlasId": "b47e000c-1df3-4309-a1f4-1c4eecbf46c9",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "b47e000c-1df3-4309-a1f4-1c4eecbf46c9",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V2JSYVR2",
      "course": {
        "id": "6131f6e984e66e8d628c652d",
        "name": "Functional English"
      },
      "course_id": "4a2cf9dd-c1da-4bfe-b7cf-d609100eab0e",
      "createdAt": 1642590158559,
      "endDate": 1658275199999,
      "grades": [
        "11",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Functional English - 2(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642590158504,
      "state": "active",
      "studentCount": 2,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643627936575,
      "classId": "61e7efce84e66e8d6210c041",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61e7efce84e66e8d6210c05c",
      "atlasId": "d141183a-3831-43e5-9197-b1d485d2eff5",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "d141183a-3831-43e5-9197-b1d485d2eff5",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V25OKT6G",
      "course": {
        "id": "6131f6c384e66e8d628ad7d3",
        "name": "Functional Science"
      },
      "course_id": "290025da-7957-4d8a-bfe5-d7b3119de81b",
      "createdAt": 1642590158676,
      "endDate": 1658275199999,
      "grades": [
        "11",
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Functional Science - 3(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642590158619,
      "state": "active",
      "studentCount": 2,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643627936683,
      "classId": "61e7efce84e66e8d6210c05c",
      "parent": {},
      "primaryTeacherId": null,
      "tags": []
    },
    {
      "_id": "61e7efce84e66e8d6210c087",
      "atlasId": "4cddcb8d-cab0-4c0c-b488-eba838e9a3c8",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "4cddcb8d-cab0-4c0c-b488-eba838e9a3c8",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V21F64D5",
      "course": {
        "id": "6131f6c784e66e8d628b0091",
        "name": "Academic Skills"
      },
      "course_id": "19fc0f59-c039-48c9-9a31-a99dc36d3a6a",
      "createdAt": 1642590158788,
      "endDate": 1658275199999,
      "grades": [
        "11"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Academic Skills - 4(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642590158737,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048
    },
    {
      "_id": "61e7efce84e66e8d6210c0b8",
      "atlasId": "7bb1bb57-a986-46ff-8481-f88a9b595350",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "7bb1bb57-a986-46ff-8481-f88a9b595350",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V2CYUACI",
      "course": {
        "id": "6131f6da84e66e8d628bd59d",
        "name": "Physical Education"
      },
      "course_id": "bffe6c35-2958-46fa-a7c6-1fd52be17725",
      "createdAt": 1642590158905,
      "endDate": 1658275199999,
      "grades": [
        "11"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Physical Education - 5(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642590158849,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048
    },
    {
      "_id": "61e7efcf84e66e8d6210c181",
      "atlasId": "4c976f81-809e-4cee-93e1-73572ee535d1",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "4c976f81-809e-4cee-93e1-73572ee535d1",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V2IE8Y8Y",
      "course": {
        "id": "6131f6c784e66e8d628b038b",
        "name": "Academic Skills"
      },
      "course_id": "f2193542-6c0b-457f-b01d-cd7c54e8aadb",
      "createdAt": 1642590159141,
      "endDate": 1658275199999,
      "grades": [
        "11"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Academic Skills - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642590159084,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643194928048
    },
    {
      "_id": "61ea929384e66e8d62d61bbd",
      "atlasId": "a0234d38-ee4b-45d9-804c-26e0899deb3b",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "a0234d38-ee4b-45d9-804c-26e0899deb3b",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V23ILGOG",
      "course": {
        "id": "61ea929384e66e8d62d61bae",
        "name": "Early Departure"
      },
      "course_id": "75020262-aed1-4662-b61d-18ad70cef970",
      "createdAt": 1642762899059,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Early Departure - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1642762899004,
      "state": "active",
      "studentCount": 6,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643713311017
    },
    {
      "_id": "61f9131284e66e8d62b60926",
      "atlasId": "28a6386d-8bb4-4590-8ebb-1713514ae651",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "28a6386d-8bb4-4590-8ebb-1713514ae651",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V2KKL3XK",
      "course": {
        "id": "614968d684e66e8d62a4e07f",
        "name": "Community Experience"
      },
      "course_id": "6931df03-ab96-478f-96c9-bffff6a1da48",
      "createdAt": 1643713298374,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Community Experience - 4(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1643713298314,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643713310912
    },
    {
      "_id": "61f9131284e66e8d62b60a7f",
      "atlasId": "ef8f7120-d400-4279-8f03-092fcde8621c",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "ef8f7120-d400-4279-8f03-092fcde8621c",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V2SCWM8B",
      "course": {
        "id": "614968d684e66e8d62a4e07f",
        "name": "Community Experience"
      },
      "course_id": "6931df03-ab96-478f-96c9-bffff6a1da48",
      "createdAt": 1643713298510,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Community Experience - 5(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1643713298458,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643713310937
    },
    {
      "_id": "61f9131284e66e8d62b60b6c",
      "atlasId": "8d5e7ab0-8f90-425b-b3bb-a8f0c25e6b1c",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "8d5e7ab0-8f90-425b-b3bb-a8f0c25e6b1c",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "c6b1fe4c-ca66-4813-8d62-26a0da194af2"
      ],
      "code": "V27Q3QXX",
      "course": {
        "id": "614968d684e66e8d62a4e07f",
        "name": "Community Experience"
      },
      "course_id": "6931df03-ab96-478f-96c9-bffff6a1da48",
      "createdAt": 1643713298634,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac75dd16ded172e0f6b",
      "institutionName": "Montebello High",
      "name": "Community Experience - 6(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1643713298576,
      "state": "active",
      "studentCount": 1,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643713310963
    },
    {
      "_id": "61f9131584e66e8d62b62087",
      "atlasId": "fb72456d-1d96-4107-8a07-18b6cf5b249b",
      "districtId": "5f1d9aab5dd16ded172daaf1",
      "__v": 0,
      "active": 1,
      "atlasClassId": null,
      "atlasCode": "fb72456d-1d96-4107-8a07-18b6cf5b249b",
      "atlasProviderName": "Classlink",
      "atlasSessionIds": [
        "9177d8d7-8c4c-46ec-9eb1-17fa9a1e6df5"
      ],
      "code": "V2EB6TRJ",
      "course": {
        "id": "61f9131584e66e8d62b62078",
        "name": "Late Arrival"
      },
      "course_id": "62b7d326-1aa4-4cde-8b04-d76420d5a82f",
      "createdAt": 1643713301337,
      "endDate": 1658275199999,
      "grades": [
        "12"
      ],
      "identifiers": [],
      "institutionId": "5f1d9ac15dd16ded172dcf3e",
      "institutionName": "Bell Gardens High",
      "name": "Late Arrival - 1(A)",
      "standardSets": [
        {
          "_id": 214,
          "name": "Other"
        }
      ],
      "startDate": 1643713301247,
      "state": "active",
      "studentCount": 3,
      "subject": "Other Subjects",
      "termId": "60e4a1418b79bd0009d6c717",
      "thumbnail": null,
      "type": "class",
      "updateInstitution": false,
      "updatedAt": 1643713312651
    }
  ]

const groupsHavingOwners = []
for (const d of data) {
    if (!isEmpty(d.owners)) {
        groupsHavingOwners.push(d)
    }
}

console.log(JSON.stringify(groupsHavingOwners, null, 2))