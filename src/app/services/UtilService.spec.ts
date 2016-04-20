import {describe, it, expect} from 'angular2/testing';
import {UtilService} from './UtilService';

export function main() {

    describe('UtilService', () => {

        it('should get keys of object', () => {
            let result: string[] = UtilService.getStringKeys({name: 1, value: 2});
            expect(result).toContain('name');
            expect(result).toContain('value');
            expect(result.length).toBe(2);
        });
    });
}
