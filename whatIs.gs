function autoCrat_whatIs() {
  var app = UiApp.createApplication().setHeight(550);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var panel = app.createVerticalPanel();
  var autoGrid = app.createGrid(1, 2);
  var image = app.createImage(this.AUTOCRATIMAGEURL);
  image.setHeight("100px");
  label.setStyleAttribute('fontSize', '1.5em').setStyleAttribute('fontWeight', 'bold');
  autoGrid.setWidget(0, 0, image);
  autoGrid.setWidget(0, 1, label);
  var mainGrid = app.createGrid(4, 1);
  mainGrid.setWidget(0, 0, app.createHTML(html));
  mainGrid.setWidget(1, 0, sponsorLabel);
  mainGrid.setWidget(2, 0, sponsorImage);
  mainGrid.setWidget(3, 0, supportLink);
  app.add(autoGrid);
  panel.add(mainGrid);
  app.add(panel);
  ss.show(app);
  return app;
}
