/**
 * Planner page object example module for work item list page
 * See: http://martinfowler.com/bliki/PageObject.html,
 * https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings
 * @author ldimaggi@redhat.com
 * TODO - Complete the page object model pending completion of UI at: http://demo.almighty.io/
 */

'use strict';

/*
 * Work Item Detail Page Definition
 */

let testSupport = require('../testSupport');
let constants = require("../constants");
let until = protractor.ExpectedConditions;

class WorkItemDetailPage {

 constructor() {
 };

/* Note - The order of UI element defintions in this page object are top-->bottom, left->right */

  get workItemDetailId () {
    return element(by.id("wi-detail-id"));
  }

  get workItemDetailFullPageCloseButton () {
    return element(by.xpath(".//*[contains(@class,'f8-detail__header')]/span[contains(@class,'pficon-close pull-right')]"));
  }
  clickWorkItemDetailFullPageCloseButton () {
    return this.workItemDetailFullPageCloseButton.click();
  }

  get workItemDetailCloseButton () {
      return element(by.css(".f8-quick-preview--close"));
//    return element(by.xpath(".//*[contains (@class,'pficon-close pull-right margin-right-5 padding-15 close')]"));
  }

  clickWorkItemDetailCloseButton () {
    return this.workItemDetailCloseButton.click();
  }

  get workItemDetailType () {
    return element(by.id("wi-detail-type"));
  }

  setWorkItemDetailType (newTypeString, append) {
    return this.workItemDetailType.sendKeys(newTypeString);
  }

  /* This UI element is only displayed when the user accesses the detail page of an existing work item */
  get clickWorkItemDetailTitle () {
    return element(by.id("wi-title-div"));
  }

  clickWorkItemDetailTitleClick () {
    return this.clickWorkItemDetailTitle.click();
  }

  get workItemDetailTitle () {
//    return element(by.css("#wi-title-div .inlineinput-textarea"));
    return element(by.xpath(".//*[contains(@class,'inlineinput-container')]/textarea[contains(@class,'input-field inlineinput-textarea')]"));
  }
  clickWorkItemDetailTitle2 () {
    return this.workItemDetailTitle.click();
  }

  setWorkItemDetailTitle (newTitleString, append) {
    if (!append) { this.workItemDetailTitle.clear(newTitleString) };
    return this.workItemDetailTitle.sendKeys(newTitleString);
  }

  /* Icon edit buttons */
  workItemTitleClick () {
    this.editHover().click();
  }

  get workItemTitleDiv () {
    return element(by.id("title-click-div"));
  }

  clickWorkItemTitleDiv () {
    return this.workItemTitleDiv.click();
  }

  clickWorkItemTitleById () {
  return element(by.id("wi-detail-title-ne"));
  }

  get workItemTitleEditIcon () {
    return element(by.id("workItemTitle_btn_edit"));
  }

  workItemTitleEditIconById () {
    return element(by.id("workItemTitle_btn_edit"));
  }

  clickWorkItemTitleEditIcon () {
    return this.workItemTitleEditIcon.click();
  }

  get disabledWorkItemTitleSaveIcon () {
    return element(by.css(".pull-right.btn.btn-primary.detail-action-btn.disabled"));
  }

  get workItemTitleSaveIcon () {
//    return element(by.css("#wi-title-div .inlineinput-btn-save"));
    return element(by.css('.inlineinput-btn-save'));
  }

  workItemTitleSaveIconById () {
    return element(by.css("#wi-title-div .inlineinput-btn-save"));
  }

  clickWorkItemTitleSaveIcon () {
    browser.wait(until.elementToBeClickable(this.workItemTitleSaveIcon));
    return this.workItemTitleSaveIcon.click();
  }

  get workItemTitleCancelIcon () {
//    return element(by.css("#wi-title-div .inlineinput-btn-cancel"));
    return element(by.xpath(".//*[contains(@class,'inlineinput-btn-cancel')]"));
  }

  clickWorkItemTitleCancelIcon () {
    return this.workItemTitleCancelIcon.click();
  }
  searchAssigneeInput (AssigneeSearchInput) {
    return element(by.id("userAssigneeSearchInput")).sendKeys(AssigneeSearchInput);
  }
  get workItemDetailState () {
    return element(by.id("wi-detail-state"));
  }

  setWorkItemDetailState (newStateString) {
    return this.workItemDetailState.sendKeys(newStateString);
  }

  workItemDetailAvatar () {
    return element(by.css(".user-assign-avatar"));
  }

  get workItemDetailDescription () {
    return element(by.id("wi-detail-desc"));
  }

  get workItemDetailDescriptionValue () {
    return element(by.css("#wi-detail-desc .editor-box"));
  }

  workItemDetailDescriptionById () {
    return element(by.id("wi-detail-desc"))
  }

  clickWorkItemDetailDescription () {
    return this.workItemDetailDescription.click();
  }

  setWorkItemDetailDescription (newDescriptionString, append) {
    if (!append) { this.workItemDetailDescriptionValue.clear(newDescriptionString) };
    return this.workItemDetailDescriptionValue.sendKeys(newDescriptionString);
  }

  get workItemDescriptionEditIcon2 () {
    //    return element(by.css("#wi-detail-desc .edit-icon"));
        return element(by.xpath(".//*[contains (@id,'wi-detail-desc')]/div/div/div/i[contains(@class,'pficon-edit edit-icon')]"));
      }

      clickWorkItemDescriptionEditIcon2 () {
        return this.workItemDescriptionEditIcon2.click();
      }

  get workItemDescriptionEditIcon () {
//    return element(by.css("#wi-detail-desc .edit-icon"));
    return element(by.xpath(".//*[contains(@class,'description-fields-wrap')]/div/div/f8-markdown/div/div/div/i"));
  }

  clickWorkItemDescriptionEditIcon () {
    this.workItemDescriptionEditIcon.click();
    return this.workItemDescriptionEditIcon.click();
  }

  get workItemDescriptionSaveIcon () {
    return element(by.css("#wi-detail-desc .btn-save"));
  }

  workItemDescriptionSaveIconById () {
    return element(by.css("#wi-detail-desc .btn-save"));
  }

  clickWorkItemDescriptionSaveIcon () {
    return this.workItemDescriptionSaveIcon.click();
  }

//  get workItemDescriptionCancelIcon () {
//    return element(by.css("#wi-detail-desc .markdown-test-btn-cancel"));
//  }
//
//  clickWorkItemDescriptionCancelIcon () {
//    return this.workItemDescriptionCancelIcon.click();
//  }

 /* Comment save cancel button */
 get workItemDescriptionCancelIcon () {
  return element(by.xpath(".//*[contains(@class,'action-btn')]/i[contains(@class,'fa fa-close')]"));
}
clickWorkItemDescriptionCancelIcon () {
testSupport.clickElement(this.workItemDescriptionCancelIcon, "workItemDescriptionCancelIcon", "WorkItemDetailPage");
 return;
}



  titleValidation () {
    return element(by.css(".clearfloat.title-error"));
  }

  titleAlert () {
    return element(by.xpath(".//[@id='wi-title-div'][.//[contains(@class, 'clearfloat.title-error')]]"));
  }

  titleAlertValidation () {
//    return element(by.xpath(".//*[@id='wi-title-div']//p[.//text()[contains(.,'title is a required field')]]"));
    return element(by.xpath(".//*[contains (@class, 'error-message')]/small[contains(text(),'Empty title not allowed')]"));
  }

  /*
    UI elements for workitem types detail page
  */

  WorkItemTypeDropDownList () {
    return element.all(by.css(".dropdown-menu.mobMarginL20 li a "));
  }

  clickWorkItemTypeDropDownList (number) {
    return element.all(by.css(".dropdown-text")).get(number);
  }

  WorkItemTypeDropDownListCount () {
      return element.all(by.css(".dropdown-menu.mobMarginL20 li a")).count();
  }

  clickWorkItemButton () {
    return element(by.css(".wi-type-icon")).click();
      //return element(by.xpath('.//*[@id="workItemList_OuterWrap_0"]/div/div[2]/div/ul/li[2]/a')).click(); }
  }

  clickworkItemDetailTypeIcon () {
    return element(by.css(".pull-left.dropdown-kebab-pf.detail-type-dropdown")).click();
  }

  workItemType () {
    // return element(by.css(".pull-left.dropdown-kebab-pf.detail-type-dropdown"));
    return element(by.xpath(".//div[@class='dropdown-kebab-pf detail-type-dropdown col-sm-8']"));

  }

  userstroyIcon () {
    return element(by.xpath('//*[@id="workItemList_OuterWrap_0"]/div/div[1]/div[1]/span[2]'));
   }

  valuepropositionIcon () {
    return element(by.css(".color-grey.fa.fa-gift"));
  }

  fundamentalIcon () {
    return element(by.css(".color-grey.fa.fa-bank"));
  }

  experienceIcon () {
      return element(by.css(".color-grey.fa.fa-map"));
  }

  feautureIcon () {
      return element(by.css(".color-grey.fa.fa-mouse-pointer"));
  }

  bugIcon () {
      return element(by.css(".color-grey.fa.fa-bug"));
  }

  detailUserstroyIcon2 (classString) {
    return element(by.xpath("//*[@id='wi-detail-form'][.//*[contains(@class, '" + classString + "')]]"));
  }

  workItemTypeDropDownListString (typeString) {
    return element(by.xpath("//*[@id='wi-detail-form']//li[.//text()[contains(.,'" + typeString + "')]]"));
  }

/*UI elements for State WorkItems*/

  checkWorkItemStateDropDownList () {
    return element(by.xpath('.//*[@id="wi-detail-form"]/fieldset/div[2]/div[2]/div/ul/li['+typeString+']/a/span[2]')).getText();
  }

  get workItemStateDropDownButton () {
    return element(by.id("wi-detail-state"));
  }

  clickWorkItemStateDropDownButton () {
    return element(by.id("wi-detail-state")).click();
  }

  WorkItemStateDropDownListCount () {
    return element.all(by.css(".dropdown-menu.dropdown-menu-right.dropdown-ul li a")).count();
  }

  WorkItemStateDropDownList (item) {
    return element.all(by.css(".dropdown-menu.dropdown-menu-right.dropdown-ul li a"));
  }

  newStateIcon () {
    return element(by.css(".color-grey.fa.fa-arrow-down"));
  }

  openStateIcon () {
    return element(by.css(".color-grey.fa.fa-fire"));
  }

  inprogressStateIcon () {
    return element(by.css(".color-grey.pficon.pficon-resources-almost-full"));
  }

  resolvedStateIcon () {
    return element(by.css(".color-grey.pficon.pficon-resources-full"));
  }

  closedStateIcon () {
    return element(by.css(".color-grey.fa.fa-remove"));
  }

  genericCssIcon (classString) {
    return element(by.xpath("//*[@id='workItemList_OuterWrap_0'][.//*[contains(@class, '" + classString + "')]]"));
  }

  /* The following UI elements support the assignment of a user to a work item */

  /* Icon for the user assigned to the workitem */

  /* ASSIGNEES */
  get AddAssigneeButton () {
    return element(by.id("f8-add-assignee"));
  }

  clickAddAssigneeButton() {
    return this.AddAssigneeButton.click();
  }

  get AssigneeDropdown() {
    return element(by.css("#f8-add-assignee-dropdown .select-dropdown"));
  }

  get AssigneeSearch () {
    return element(by.css("#f8-add-assignee-dropdown .select-dropdown-search-input"));
  }

  setAssigneeSearch(newSearchString, append) {
    if (!append) { this.AssigneeSearch.clear() };
    return this.AssigneeSearch.sendKeys(newSearchString);
  }

  get AssigneeDropdownListItem() {
    return element(by.xpath('.//f8-select-dropdown[@id="f8-add-assignee-dropdown"]//li'));
  }

  clickAssigneeListItem(username) {
    element(by.xpath('.//f8-select-dropdown[@id="f8-add-assignee-dropdown"]//b[text()="'+ username +'"]')).click();
  }

  get closeAssigneeDropdown () {
    return element(by.css("#f8-add-assignee-dropdown .close-pointer"));
  }

  clickCloseAssigneeDropdown() {
    return this.closeAssigneeDropdown.click();
  }

  get AssignUsers() {
    return $$(".f8-assignees span");
  }

/**UI elements for comments testSupport  */
  clickCommentsDiv (){
    return element(by.id("wi-comment-add-comment")).click();
  }

  /* Comment edit icon - aka the little pencil icon */
  get commentIcon () {
    return element(by.xpath(".//*[contains(@class,'f8-comment--input')]/f8-markdown/div/div/div/i"));
  }
  clickCommentIcon () {
    browser.wait(until.presenceOf(this.commentIcon), constants.WAIT, 'Failed to find element commentIcon');
    this.commentIcon.click().then(function(){
      console.log("WorkItemDetailPage - clicked element: commentIcon");
    });
    return;
  }

  /* The edit box for a comment */
  commentDiv () {
    return element(by.id("wi-comment"));
    //return element(by.xpath(".//*[contains(@class,'editor active')]"));
  }
  clickCommentDiv () {
    return this.commentDiv().click();
  }
  get activeCommentEditorBox () {
    return element(by.xpath(".//p[contains (@class,'editor-box editor-markdown')]"));
  }
  clickActiveCommentEditorBox () {
    testSupport.clickElement(this.activeCommentEditorBox, "activeCommentEditorBox", "WorkItemDetailPage");
    return;
  }
  writeComment (comment) {
    return this.activeCommentEditorBox.sendKeys(comment + protractor.Key.ENTER);
  }
  editComments (comment, index, append) {
    if (!append) { this.commentBody(index).clear(comment) };
    return this.commentBody(index).sendKeys(comment);
  }

  /* Comment save button */
  get commentSaveButton () {
    return element(by.xpath(".//*[contains(@class,'action-btn btn-save')]/i[contains(@class,'fa fa-check')]"));
 }
 clickCommentSaveButton () {
  testSupport.clickElement(this.commentSaveButton, "commentSaveButton", "WorkItemDetailPage");
   return;
 }

 /* Comment save cancel button */
 get commentSaveCancelButton () {
    return element(by.xpath(".//*[contains(@class,'action-btn')]/i[contains(@class,'fa fa-close')]"));
 }
 clickCommentSaveCancelButton () {
  testSupport.clickElement(this.commentSaveCancelButton, "commentSaveCancelButton", "WorkItemDetailPage");
   return;
 }

  commentsAvatar (index){
    return element(by.id("comment_avatar_"+index));
  }

  commentBody (index){
    return element(by.id("comment_body_"+index));
  }

  commentsUsername  (index){
    return element(by.id("comment_username_"+ index)).getText();
  }
  getNumberofComments (){
    return element(by.css('comments-wrap')).count();
  }
  getCommentTime  (index){
    return element(by.id('comment_time_'+index)).getText();
  }
  commentEdit(index) {
    browser.wait(until.presenceOf(element(by.css('#comment_body_' + index))))
    return element(by.css('#comment_body_' + index + ' .edit-icon'));
  }
  clickCommentEdit(index) {
    var editcommenticon = this.commentEdit(index);
    editcommenticon.click();
    return editcommenticon.click();
  }

  commentBody(index){
    browser.wait(until.presenceOf(element(by.css('#comment_body_' + index + ' .editor-box')), constants.WAIT, "Failed to find the comment"))
    return element(by.css('#comment_body_' + index + ' .editor-box'));
  }
  getCommentBody  (index){
    return this.commentBody(index).getText();
  }
  getTotalNumberOfComments  (){
    return element(by.id('total_comments')).getText();
  }
  clickSaveComment(index){
    return element(by.id('comment_save_btn'+index)).click();
  }
  clickCloseComment(index){
    return element(by.css('#comment_body_' + index + ' .fa-close')).click();
  }
  commentsKebab (){
    return element(by.id('commentActionsKebab'));
   }
  clickCommentsKebab (){
    return this.commentsKebab().click();
   }
  clickEditComment(){
    return element(by.linkText('Edit...')).click();
  }
  clickDeleteComment(){
    return element(by.linkText('Delete')).click();
  }
  searchLinkByText(text){
    return element(by.linkText(text));
  }
  deleteCommentDialogeClose(){
    return element(by.linkText("×"));
  }
  clickDeleteCommentDialogeClose(){
    return this.deleteCommentDialogeClose().click();
  }
  deleteCommentDialogeCancel(){
    return element(by.id('comment-delete-cancel'));
  }
  clickDeleteCommentDialogeCancel(){
    return this.deleteCommentDialogeCancel().click();
  }
  deleteCommentDialogeDeletebtn(){
    return element(by.id('comment-delete-confirm'));
  }
  clickDeleteCommentDialogeDeletebtn(){
    return this.deleteCommentDialogeDeletebtn().click();
  }
  deleteCommentDialogeModalTitle(){
    return element(by.css('.modal-title'));
  }
  getDeleteCommentDialogeModalTitle(){
    return  this.deleteCommentDialogeModalTitle().getText();
  }

/**UI elements for created time WI */
  getCreatedtime  (){
    return element(by.id('created_at')).getText();
  }
  /**UI elements for creator*/
  getCreatorLabel (){
    return element(by.id('creator_label')).getText();
  }
  getCreatorDefaultIcon (){
    return element(by.id('user_creator_icon'));
  }
  clickCreatorDefaultIcon (){
    return element(by.id('user_creator_icon')).click();
  }
  getCreatorAvatar  (){
    return element(by.id('WI_details_reporter_img'));
  }
  clickCreatorAvatar  (){
    return element(by.id('WI_details_reporter_img')).click();
  }
  get creatorUsername  (){
    return element(by.id('WI_details_reporter_user'));
  }
  getCreatorUsername  (){
    return element(by.id('WI_details_reporter_user')).getText();
  }
  getImageURL (){
    return element(by.id('WI_details_reporter_img')).getAttribute('src');
  }
  /**Link-Item UI elements  */
  linkItemDiv (){
    return element(by.id('.wi-link-content'));
  }
  linkItemHeader (){
    return element(by.css('.link-header'));
  }
  linkItemContainer (){
    return element(by.id('wi-link'));
  }
  linkItemHeaderCaret (){
    return element(by.css('.f8-toggle-caret-right'));
  }
  linkItemDetailedDiv (){
    return element(by.css('.link-list-wrap'));
  }
  linkItemTotalCount  (){
    return element(by.id('wi-link-total'));
  }
  get createLinkButton (){
    return element(by.id("create-link-button"));
  }
  clickCreateLinkButton (){
    return this.createLinkButton.click();
  }
  get checkLinkDropDown (){
    return element(by.id("wi-link-type"));
  }
  clickLinkDropDown (){
    return element(by.id("wi-link-type")).click();
  }
  linkTypeDropDownListString (typeString) {
    return element(by.xpath("//*[@id='wi-link-editor']//li[.//text()[contains(.,'" + typeString + "')]]"));
  }
  linkSearchDropDownListString (typeString) {
    return element(by.xpath("//*[@id='wi-link-editor']//li[.//text()[contains(.,'" + typeString + "')]]"));
  }
  clickSearchLinkItemTextBox  (){
    return element(by.id("workitem-link-search")).click();
  }
  get searchLinkItemTextBox  (){
    return element(by.id("workitem-link-search")).click();
  }
  setSearchLinkItem (searchValue){
    this.searchLinkItemTextBox.sendKeys(searchValue);
    return this.linkSearchDropDownListString(searchValue).click();
  }
  clickOnLinkBind (){
    return element(by.id("bind-link")).click();
  }
  linkTitle (){
    return element(by.css(".f8-link__list-item-title")).getText();
  }
  linkclose (index){
    return element(by.id("closeLink_" + index));
  }
  linkTotalByTypes (){
    return element(by.id("wi-link-total")).getText();
  }
  linkItemTitle (){
    return element(by.id("link_item_title")).getText();
  }
  /** UI elements for Start Coding button */
  get startCodingElement  (){
    return element(by.id("start-coding-link"));
  }
  clickStartCoding  (){
    return this.startCodingElement.click();
  }
  startCodingDiv  (){
    return element(by.css(".form-control-static.start-coding"));
  }
  startCodingLabel() {
    return element(by.id("coding_label"));
  }

  /** UI elements for Areas */
  get areaLabel (){
    // return element(by.id('area_label'));
    return element(by.css('.detail-area-wrap > #area_label'));
  }
  AreaSelect (){
    return element(by.css('#area-dropdown .details-dropdown'));
    //#area-dropdown > div.typeahead-dropdown.combobox-container > span.pointer.details-dropdown
  }
  clickAreaSelect (){
    return this.AreaSelect().click();
  }
  searchAreaInput (AreaInput) {
    return element(by.id("areaSearchInput")).sendKeys(AreaInput).click();
  }
  clickAreas  (areaid){
    return element(by.id('area-'+ areaid)).click();
  }
  saveAreasButton (){
    return element(by.css('#area-dropdown .save-button'));
  }
  SaveAreas  (){
    return this.saveAreasButton().click();
  }
  ClosekAreas  (){
    return element(by.css('#area-dropdown .cancel-button')).click();
  }
/**Iteration element */
  IterationOndetailPage(){
    browser.wait(until.elementToBeClickable(element(by.css('#iteration-dropdown .details-dropdown'))), constants.WAIT, 'Failed to find iteration on detail page');
    return element(by.css('#iteration-dropdown .details-dropdown'));
  }
  getAssociatedIteration  (){
    return this.IterationOndetailPage().getText();
  }
  getReassociateText(){
    return element(by.id('reassociate-msg')).getText();
  }
  saveIteration(){
    return element(by.css('#iteration-dropdown .save-button')).click();
  }
  cancleIterationBtn(){
    return element(by.css('#iteration-dropdown .cancel-button')).click();
  }
  iterationDropdown(){
    browser.wait(until.elementToBeClickable(element(by.css('#iteration-dropdown .details-dropdown'))), constants.WAIT, 'Failed to find iteration on detail page');
    return element(by.css('#iteration-dropdown .details-dropdown'));
  }
  iterationCaretdropdown (){
    return element(by.id('iteration-caret'));
  }
  clickAssignIteration(){
    return this.iterationDropdown().click();
  }
  associateIteration (text){
    return element(by.linkText(text)).click();
  }
  associateIterationById(iterationid){
    return element(by.id('iteration-'+ iterationid)).click();
  }
  genericLinkseach(text){
    return element(by.linkText(text)).click();
  }


  /* Dynamic fields - limited at present (April 2017) to workitems of type user story */

  get dynamicFormGroup () {
    return element(By.css('.form-group>alm-dynamic-field'));
  }

  /* Dynamic field: Steps to reproduce */

  get stepsToReproduceLabelParent () {
    return element(By.xpath('.//label[contains(text(),"Steps to Reproduce")]/..'));
  }

  get stepsToReproduceEditIcon () {
    return element(by.css('.pficon-edit.markdown-test-btn-edit'));
  }

  clickStepsToReproduceEditIcon () {
    this.stepsToReproduceEditIcon.click();
  }

  get stepsToReproduceText () {
    return element(By.css('.pficon-edit.markdown-test-btn-edit'));
  }

  clickStepsToReproduceText () {
    browser.wait(until.visibilityOf(this.stepsToReproduceText, constants.WAIT));
    return this.stepsToReproduceText.click();
  }

  get editableTextForStepsToReproduce () {
    return this.stepsToReproduceLabelParent.element(by.css('.text.markdown-test-text'));
  }

  setstepsToReproduceText (newString) {
    browser.wait(until.visibilityOf(this.editableTextForStepsToReproduce, constants.WAIT));
    return this.editableTextForStepsToReproduce.sendKeys(newString);
  }

  /* Dynamic field: Story points */

  get storyPointsLabelParent () {
    return element(By.xpath('.//label[contains(text(),"Story Points")]/..'));
  }

  get storyPoints () {
    return this.storyPointsLabelParent.element(by.css('.col-sm-10.no-left-padding>div>input'));
  }

  setStoryPointsText (newString) {
    browser.wait(until.visibilityOf(this.storyPoints, constants.WAIT));
    return this.storyPoints.sendKeys(newString);
  }

  get saveStoryPointsButton () {
    return this.storyPointsLabelParent.element(by.css('.fa.fa-check'));
  }

  clickSaveStoryPointsButton () {
    return this.saveStoryPointsButton.click();
  }

  get cancelStoryPointsButton () {
    return this.storyPointsLabelParent.element(by.css('.pficon.pficon-close'));
  }

  clickCancelStoryPointsButton () {
    return this.cancelStoryPointsButton.click();
  }

  /* Dynamic field: Important */

  get importantLabelParent () {
    return element(By.xpath('.//label[contains(text(),"Important")]/..'));
  }

  get importantDropdown () {
//    return this.importantLabelParent.element(by.css('.dropdown-toggle'));
    return this.importantLabelParent.element(by.css('.pointer.details-dropdown.neutral-entry'));
  }

  clickImportantDropdown () {
    return this.importantDropdown.click();
  }

  get importantDropdownYes () {
//    return this.importantLabelParent.element(by.xpath(".//*[contains(@class,'dropdown-text') and contains(text(),'Yes')]"));
    return this.importantLabelParent.element(by.id("true"));
  }

  clickImportantDropdownYes () {
    return this.importantDropdownYes.click();
  }

  get importantDropdownNo () {
    //return this.importantLabelParent.element(by.xpath(".//*[contains(@class,'dropdown-text') and contains(text(),'No')]"));
    return this.importantLabelParent.element(by.id("false"));
  }

  clickImportantDropdownNo () {
    return this.importantDropdownNo.click();
  }

  get importantDropdownConfirmButton () {
    return this.importantLabelParent.element(by.css('.save-button'));
  }

  clickImportantDropdownConfirmButton () {
    return this.importantDropdownConfirmButton.click();
  }

  get importantDropdownCancelButton () {
    return this.importantLabelParent.element(by.css('.cancel-button'));
  }

  clickImportantDropdownCancelButton () {
    return this.importantDropdownCancelButton.click();
  }

  /* Dynamic field: Due Date */

  get dueDateLabelParent () {
    return element(By.xpath('.//label[contains(text(),"Due Date")]/..'));
  }

  get dueDateSelection () {
    return this.dueDateLabelParent.element(by.css('.selection'));
  }

  clickDueDateSelection () {
    browser.wait(until.elementToBeClickable(this.dueDateSelection, constants.WAIT));
    return this.dueDateSelection.click();
  }

  get dueDateCalendarButton () {
    return this.dueDateLabelParent.element(by.css('.btnpicker.btnpickerenabled.btnleftborder'));
  }

  clickDueDateCalendarButton () {
    return this.dueDateCalendarButton.click();
  }

  displayedMonth (monthString) {
    var xpathString = ".//*[contains(@class,'monthlabel') and contains(text(),'" + monthString + "')]";
    return this.dueDateLabelParent.element(by.xpath(xpathString));
  }

  clickDisplayedMonth (monthString) {
    return this.displayedMonth(monthString).click();
  }

  monthSelectorLeft (monthString) {
    /* Example: .//*[contains(@class,'monthlabel') and contains(text(),'Apr')]/../preceding-sibling::*   */
    var xpathString = ".//*[contains(@class,'monthlabel') and contains(text(),'" + monthString + "')]/../preceding-sibling::*";
    return this.dueDateLabelParent.element(by.xpath(xpathString));
  }

  clickMonthSelectorLeft (monthString) {
    return this.monthSelectorLeft(monthString).click();
  }

  monthSelectorRight (monthString) {
    /* Example: .//*[contains(@class,'monthlabel') and contains(text(),'Apr')]/../following-sibling::*   */
    var xpathString = ".//*[contains(@class,'monthlabel') and contains(text(),'" + monthString + "')]/../following-sibling::*";
    return this.dueDateLabelParent.element(by.xpath(xpathString));
  }

  clickMonthSelectorRight (monthString) {
    return this.monthSelectorRight(monthString).click();
  }

  displayedYear (yearString) {
    var xpathString = ".//*[contains(@class,'yearlabel') and contains(text(),'" + yearString + "')]";
    return this.dueDateLabelParent.element(by.xpath(xpathString));
  }

  clickDisplayedYear (yearString) {
    return this.displayedYear(yearString).click();
  }

  yearSelectorLeft (yearString) {
    /* Example: .//*[contains(@class,'yearlabel') and contains(text(),'2017')]/../preceding-sibling::*   */
    var xpathString = ".//*[contains(@class,'yearlabel') and contains(text(),'" + yearString + "')]/../preceding-sibling::*";
    return this.dueDateLabelParent.element(by.xpath(xpathString));
  }

  clickYearSelectorLeft (yearString) {
    return this.yearSelectorLeft(yearString).click();
  }

  yearSelectorRight (yearString) {
    /* Example: .//*[contains(@class,'yearlabel') and contains(text(),'2017')]/../following-sibling::*   */
    var xpathString = ".//*[contains(@class,'yearlabel') and contains(text(),'" + yearString + "')]/../following-sibling::*";
    return this.dueDateLabelParent.element(by.xpath(xpathString));
  }

  clickYearSelectorRight (yearString) {
    return this.yearSelectorRight(yearString).click();
  }

  get currentDate () {
    return element(By.css('.currday'));
  }

  clickCurrentDate () {
    return this.currentDate.click();
  }

  targetDay (dayOfWeekCounter, weekOfMonthCounter) {
    var xpathString = ".//tr[" + weekOfMonthCounter + "]/td[contains(@class,'tablesingleday')][" + dayOfWeekCounter + "]";
    return element(by.xpath(xpathString));
  }

  clockTargetDay (dayOfWeekCounter, weekOfMonthCounter) {
    return this.targetDay (dayOfWeekCounter, weekOfMOnthCounter);
  }

  /* Dynamic field: Severity */

  get severityLabelParent () {
    return element(By.xpath('.//label[contains(text(),"Severity")]/..'));
  }

  get severityDropdown () {
    return this.severityLabelParent.element(by.css('.pointer.details-dropdown.neutral-entry'));
  }

  clickSeverityDropdown () {
    browser.wait(until.elementToBeClickable(this.severityDropdown, constants.WAIT));
    return this.severityDropdown.click();
  }

  get severityDropdownLow () {
    return this.severityLabelParent.element(by.id("low"));
  }

  clickSeverityDropdownLow () {
    return this.severityDropdownLow.click();
  }

  get severityDropdownMid () {
    return this.severityLabelParent.element(by.id("mid"));
  }

  clickSeverityDropdownMid () {
    return this.severityDropdownMid.click();
  }

  get severityDropdownHigh () {
    return this.severityLabelParent.element(by.id("high"));
  }

  clickSeverityDropdownHigh () {
    return this.severityDropdownHigh.click();
  }

  get severityDropdownBlocker () {
    return this.severityLabelParent.element(by.id("blocker"));
  }

  clickSeverityDropdownBlocker () {
    return this.severityDropdownBlocker.click();
  }

  get severityDropdownConfirmButton () {
    return this.severityLabelParent.element(by.css('.save-button'));
  }

  clickSeverityDropdownConfirmButton () {
    return this.severityDropdownConfirmButton.click();
  }

  get severityDropdownCancelButton () {
    return this.severityLabelParent.element(by.css('.cancel-button'));
  }

  clickSeverityDropdownCancelButton () {
    return this.importantDropdownCancelButton.click();
  }

  /* Error conditions */

  /* When all text in the title field is deleted */
  get deletedTitleError () {
//    return element(By.xpath('.//*[@id="wi-title-div"]//p[contains(text(),"title is a required field")]'));
    return element(By.css('.clearfloat.title-error'));
  }

  scrollToBottom() {
    return browser.executeScript(
      'document.getElementsByClassName(\'f8-quick-preview\')[0].scrollTop = document.getElementsByClassName(\'f8-quick-preview\')[0].scrollHeight'
    )
  }

  scrollToBottomRight() {
    return browser.executeScript('window.scrollTo(1440,900);');
  }

  scrollToTopRight() {
    // var elm = element(by.css(".pficon-close.f8-quick-preview--close"));
    // return browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    return browser.executeScript('window.scrollTo(1440,0);');
  }

  /* UI elements for Label */
  get addLabelButton() {
    return $('.clickable.add-label');
  }

  clickAddLabelButton(){
    return this.addLabelButton.click();
  }

  get selectLabelDropdown() {
    return $('.select-dropdown.dropdown-menu.dropdown-menu-left.show');
  }

  getLabelByTitle(title) {
    browser.wait(until.elementToBeClickable(element(by.xpath("//ul[@class='select-dropdown-menu']/li//*[text()='"+ title +"']")), constants.WAIT));
    return element(by.xpath("//ul[@class='select-dropdown-menu']/li//*[text()='"+ title +"']"));
  }

  // Removes label by clicking on 'x'
  removeLabelByTitle(title) {
    let path = "//div[@id='workItemDetail_Wrapper']//*[@class='label-wrapper']//span[contains(text(), '"+ title +"')]/span";
    return element.all(by.xpath(path)).first().click();
  }

  selectLabelByTitle(labelTitle) {
    return this.getLabelByTitle(labelTitle).click();
  }

  get labelsCount() {
    return $$(".dropdown-menu.dropdown-menu-left.show li").count();
  }

  get createLabelButton(){
    return $('div.create-label-button');
  }

  clickCreateLabelButton(){
    return this.createLabelButton.click();
  }

  get labelInput() {
    return $('.create-label .create-label-input');
  }

  setLabelName(text) {
    return this.labelInput.sendKeys(text);
  }

  clickLabelCheckbox() {
    return $('button.fa-check').click();
  }

  get labelCancelIcon() {
    return this.createLabelInputDiv.$('.pficon-close');
  }

  clickLabelCancel() {
    return this.labelCancelIcon.click();
  }

  get labelCloseIcon() {
    return $('.select-dropdown-header .pull-right.pficon-close.close-pointer');
  }

  clickLabelClose() {
    return this.labelCloseIcon.click();
  }

  get LabelColorSelectorIcon() {
    return this.createLabelInputDiv.$('.palet');
  }

  clickLabelColorSelector() {
    return this.LabelColorSelectorIcon.click();
  }

  listOfLabels() {
    return $$('.select-dropdown-menu li').first();
  }

  attachedLabels() {
    return $$('f8-label .label-wrapper span.label');
  }
}

module.exports = WorkItemDetailPage;
