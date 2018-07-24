// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a DigitalOcean Certificate resource that allows you to manage
 * certificates for configuring TLS termination in Load Balancers.
 * Certificates created with this resource can be referenced in your
 * Load Balancer configuration via their ID.
 */
export class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateState): Certificate {
        return new Certificate(name, <any>state, { id });
    }

    /**
     * The full PEM-formatted trust chain
     * between the certificate authority's certificate and your domain's TLS
     * certificate.
     */
    public readonly certificateChain: pulumi.Output<string | undefined>;
    /**
     * The contents of a PEM-formatted public
     * TLS certificate.
     */
    public readonly leafCertificate: pulumi.Output<string>;
    /**
     * The name of the certificate for identification.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The expiration date of the certificate
     */
    public /*out*/ readonly notAfter: pulumi.Output<string>;
    /**
     * The contents of a PEM-formatted private-key
     * corresponding to the SSL certificate.
     */
    public readonly privateKey: pulumi.Output<string>;
    /**
     * The SHA-1 fingerprint of the certificate
     */
    public /*out*/ readonly sha1Fingerprint: pulumi.Output<string>;

    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: CertificateArgs | CertificateState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: CertificateState = argsOrState as CertificateState | undefined;
            inputs["certificateChain"] = state ? state.certificateChain : undefined;
            inputs["leafCertificate"] = state ? state.leafCertificate : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notAfter"] = state ? state.notAfter : undefined;
            inputs["privateKey"] = state ? state.privateKey : undefined;
            inputs["sha1Fingerprint"] = state ? state.sha1Fingerprint : undefined;
        } else {
            const args = argsOrState as CertificateArgs | undefined;
            if (!args || args.leafCertificate === undefined) {
                throw new Error("Missing required property 'leafCertificate'");
            }
            if (!args || args.privateKey === undefined) {
                throw new Error("Missing required property 'privateKey'");
            }
            inputs["certificateChain"] = args ? args.certificateChain : undefined;
            inputs["leafCertificate"] = args ? args.leafCertificate : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["privateKey"] = args ? args.privateKey : undefined;
            inputs["notAfter"] = undefined /*out*/;
            inputs["sha1Fingerprint"] = undefined /*out*/;
        }
        super("digitalocean:index/certificate:Certificate", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    /**
     * The full PEM-formatted trust chain
     * between the certificate authority's certificate and your domain's TLS
     * certificate.
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted public
     * TLS certificate.
     */
    readonly leafCertificate?: pulumi.Input<string>;
    /**
     * The name of the certificate for identification.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The expiration date of the certificate
     */
    readonly notAfter?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted private-key
     * corresponding to the SSL certificate.
     */
    readonly privateKey?: pulumi.Input<string>;
    /**
     * The SHA-1 fingerprint of the certificate
     */
    readonly sha1Fingerprint?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The full PEM-formatted trust chain
     * between the certificate authority's certificate and your domain's TLS
     * certificate.
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted public
     * TLS certificate.
     */
    readonly leafCertificate: pulumi.Input<string>;
    /**
     * The name of the certificate for identification.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The contents of a PEM-formatted private-key
     * corresponding to the SSL certificate.
     */
    readonly privateKey: pulumi.Input<string>;
}
