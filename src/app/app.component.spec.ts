import {
    beforeEachProviders,
    describe,
    expect,
    it,
    inject
} from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: MeansStack', () => {
    it('should create the app',
        inject([AppComponent], (app: AppComponent) => {
            expect(app).toBeTruthy();
        }));

    it('should have as title \'means-stack works!\'',
        inject([AppComponent], (app: AppComponent) => {
            expect(app.title).toEqual('means-stack works!');
        }));
});
