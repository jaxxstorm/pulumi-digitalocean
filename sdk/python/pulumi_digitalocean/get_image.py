# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetImageResult(object):
    """
    A collection of values returned by getImage.
    """
    def __init__(__self__, image=None, min_disk_size=None, private=None, regions=None, type=None, id=None):
        if image and not isinstance(image, basestring):
            raise TypeError('Expected argument image to be a basestring')
        __self__.image = image
        """
        The id of the image.
        * `min_disk_size`: The minimum 'disk' required for the image.
        """
        if min_disk_size and not isinstance(min_disk_size, int):
            raise TypeError('Expected argument min_disk_size to be a int')
        __self__.min_disk_size = min_disk_size
        if private and not isinstance(private, bool):
            raise TypeError('Expected argument private to be a bool')
        __self__.private = private
        """
        Is image a public image or not. Public images represents
        Linux distributions or Application, while non-public images represent
        snapshots and backups and are only available within your account.
        * `regions`: The regions that the image is available in.
        * `size_gigabytes`: The size of the image in gigabytes.
        * `type`: Type of the image. Can be "snapshot" or "backup".
        """
        if regions and not isinstance(regions, list):
            raise TypeError('Expected argument regions to be a list')
        __self__.regions = regions
        if type and not isinstance(type, basestring):
            raise TypeError('Expected argument type to be a basestring')
        __self__.type = type
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_image(name=None):
    """
    Get information on an snapshot images. The aim of this datasource is to enable
    you to build droplets based on snapshot names.
    
    An error is triggered if zero or more than one result is returned by the query.
    """
    __args__ = dict()

    __args__['name'] = name
    __ret__ = pulumi.runtime.invoke('digitalocean:index/getImage:getImage', __args__)

    return GetImageResult(
        image=__ret__.get('image'),
        min_disk_size=__ret__.get('minDiskSize'),
        private=__ret__.get('private'),
        regions=__ret__.get('regions'),
        type=__ret__.get('type'),
        id=__ret__.get('id'))
