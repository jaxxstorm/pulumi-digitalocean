# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

__config__ = pulumi.Config('digitalocean')

token = __config__.require('token')
"""
The token key for API operations.
"""

