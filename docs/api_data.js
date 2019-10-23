define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/admin/login",
    "title": "Admin Login Request",
    "name": "Admin_Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"user\": {\n   \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n   \"username\": \"example\",\n   \"email\": \"example@gmonk.com\",\n   \"password\": \"noneya:)\",\n   \"role\": \"example role\"\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"email\": \"example\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/adminAuth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/admin/register",
    "title": "Admin Register Request",
    "name": "Admin_Register",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"user\": {\n   \"id\": \"123e4567-e89b-12d3-a456-426655440000\",\n   \"username\": \"example\",\n   \"email\": \"example@random.com\",\n   \"password\": \"noneya:)\",\n   \"role\": \"example role\"\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": " {\n   \"firstName\": \"example\",\n\t  \"lastName\": \"doe\",\n   \"email\": \"example@random.com\",\n   \"password\": \"password\",\n   \"roleId\": \"123abc\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/adminAuth.js",
    "groupTitle": "Auth"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_arman_Documents_lambda_copy_labs_mission_control_be_docs_main_js",
    "groupTitle": "C__Users_arman_Documents_lambda_copy_labs_mission_control_be_docs_main_js",
    "name": ""
  }
] });