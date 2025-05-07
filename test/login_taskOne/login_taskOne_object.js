class LoginTaskOneObject {
    get userNameField() {
        return $("#user-name");
    }

    get getPasswordField() {
        return $("#password");
    }

    get loginButton() {
        return $("#login-button");
    }

    get errorMessage() {
        return $("//div[@class='error-message-container error']");
    }
}


module.exports = new LoginTaskOneObject();