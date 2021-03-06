import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";
import { IssueCreateComponent } from "./issue-create/issue-create.component";

@Injectable()
export class IssueCreateDeactivateGuard implements CanDeactivate<IssueCreateComponent> {

  canDeactivate(component?: IssueCreateComponent): boolean {
    if( component?.addIssueForm && !component.addIssueForm.submitted  && component.addIssueForm.dirty){
      return confirm("The changes will not be saved. Are you sure you want to leave?")
    }
    return true;
  }

}
