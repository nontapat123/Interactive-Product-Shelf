function doGet(e) { 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; // เลือกหน้าแรก
  
  // รับค่าจาก ESP32 ผ่าน URL Parameters
  var event = e.parameter.event;
  var value = e.parameter.value;
  var ldr = e.parameter.ldr;
  
  // เพิ่มข้อมูลลงในแถวใหม่ [เวลาปัจจุบัน, ประเภทเหตุการณ์, ค่าแรงสั่น, ค่าแสง]
  sheet.appendRow([new Date(), event, value, ldr]);
  
  return ContentService.createTextOutput("Success");
}