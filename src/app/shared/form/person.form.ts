import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getIdentifierForm } from './identifier.form';

export function getPersonForm(): FormGroup {
    return new FormGroup({
       address: new FormArray([]),
    

        id: new FormControl(),
        identifier: new FormArray([
            getIdentifierForm('uid'),/* ez lesz összekötve a regisztrációval */
            getIdentifierForm('email'),/*  egyedi email ez az az email amivel regisztralt az oldalra*/
          
        ]),


    }); 
    }
