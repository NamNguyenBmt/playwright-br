class BrandPage {
  constructor(page) {
    this.page = page;
    // Brand List
    this.addBrandButton = page.getByRole('button', { name: 'Add Brand' });

    // Create Brand
    this.brandNameInput = page.getByRole('textbox', { name: 'Brand Name*' });
    this.brandCodeInput = page.getByRole('textbox', { name: 'Brand Code*' });
    this.brandSubdomainInput = page.getByPlaceholder('Enter subdo');
    this.brandLogoInput = page.locator('input[type="file"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });

    // Brand Detail
    this.deleteBrandButton = page.getByRole('button', { name: 'Delete Brand' });
    this.confirmDeleteButton = page.getByRole('button', { name: 'Delete', exact: true });
    this.successMessage = page.getByText('Delete Brand Success!');

    // Cancel Button add brand
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.confirmCancelButton = page.getByRole('dialog').getByRole('button', { name: 'OK'});
    this.cancelConfirmButton = page.getByRole('dialog').getByRole('button', { name: 'Cancel'});

    this.brandnameMissing = page.getByText('This is a required field!')
    this.brandcodeMissing = page.getByText('This is a required field!')
    this.subdomainMissing = page.getByText('This is a required field!')
    this.brandlogoMissing = page.getByText('This is a required field!')
  }

  async goToCreateBrandPage() {
    await this.addBrandButton.click();
    await this.page.waitForLoadState('networkidle');
    await this.brandSubdomainInput.waitFor({ state: 'visible' });
  }

  async createBrand(brandName, brandCode, subdomain, logoPath) {
    await this.brandNameInput.fill(brandName);
    await this.brandCodeInput.fill(brandCode);
    await this.brandSubdomainInput.fill(subdomain);
    await this.brandLogoInput.setInputFiles(logoPath);
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async createBrandMissingBrandlogo(brandName, brandCode, subdomain) {
    await this.brandNameInput.fill(brandName);
    await this.brandCodeInput.fill(brandCode);
    await this.brandSubdomainInput.fill(subdomain);
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async goToBrandDetail(brandName) {
    const brandRow = this.page.getByRole('row').filter({ hasText: brandName });
    await brandRow.waitFor({ state: 'visible' });
    await brandRow.getByRole('cell').nth(1).click();
    await this.page.waitForLoadState('networkidle');
  }

  async deleteBrand() {
    await this.deleteBrandButton.click();
    await this.confirmDeleteButton.click();
    await this.successMessage.waitFor({ state: 'visible' });
  }
  async canceladdBrand() {
    await this.cancelButton.click();
    await this.confirmCancelButton.click();
    await this.page.waitForLoadState('networkidle');
  }
  async cancelConfirmButtonAddBrand() {
    await this.cancelButton.click();
    await this.cancelConfirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getSuccessMessage() {
    return this.successMessage;
  }

  async getBrandnameMissing() {
    return this.brandnameMissing;
  }
  async getBrandcodeMissing() {
    return this.brandcodeMissing;
  }
  async getSubdomainMissing() {
    return this.subdomainMissing;
  }
  async getBrandlogoMissing() {
    return this.brandlogoMissing;
  }
}

module.exports = { BrandPage };