import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv';

  ngOnInit() {
    this.bindBarickPanel();
  }

  bindBarickPanel(){
    let $ = window["$"];
    $(document).on('click', '.barick-panel .barick-panel-header', function() {
      // console.log("clicked");
      let panel = $(this).closest('.barick-panel');
      // console.log(panel);
      if(panel.hasClass('close')){
        $(this).next('.barick-panel-body').slideDown(500);
        panel.removeClass('close');
      }
      else {        
        $(this).next('.barick-panel-body').slideUp(500);
        panel.addClass('close');
      }
    })
  }
}
