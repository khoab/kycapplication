import { ApplicationConfig, BindingKey } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
/**
 * Information from package.json
 */
export interface PackageInfo {
    name: string;
    version: string;
    description: string;
}
export declare const PackageKey: BindingKey<PackageInfo>;
declare const ApiCustomizationApplication_base;
export declare class ApiCustomizationApplication extends ApiCustomizationApplication_base {
    constructor(options?: ApplicationConfig);
}
export {};
