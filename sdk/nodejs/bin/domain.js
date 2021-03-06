"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Provides a DigitalOcean domain resource.
 */
class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new Domain(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["ipAddress"] = state ? state.ipAddress : undefined;
            inputs["name"] = state ? state.name : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.ipAddress === undefined) {
                throw new Error("Missing required property 'ipAddress'");
            }
            inputs["ipAddress"] = args ? args.ipAddress : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        super("digitalocean:index/domain:Domain", name, inputs, opts);
    }
}
exports.Domain = Domain;
//# sourceMappingURL=domain.js.map