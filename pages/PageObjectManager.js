import {test,expect} from '@playwright/test';
import data from '../utils/testData.js';
import { LoginPage } from '../pages/ LoginPage';

class PageObjectManager {
    constructor(page) {
        this.loginPage = new LoginPage(page);
        // Initialize other page objects as needed
    }


    getLoginPage() {
        return this.loginPage;
    }

    // Add getters for other page objects as needed
}

module.exports = { PageObjectManager };