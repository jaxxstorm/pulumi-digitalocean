# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from setuptools import setup, find_packages
from setuptools.command.install import install
from subprocess import check_call

class InstallPluginCommand(install):
    def run(self):
        install.run(self)
        check_call(['pulumi', 'plugin', 'install', 'resource', 'digitalocean', '${PLUGIN_VERSION}'])

def readme():
    with open('README.rst') as f:
        return f.read()

setup(name='pulumi_digitalocean',
      version='${VERSION}',
      description='A Pulumi package for creating and managing Digital Ocean cloud resources.',
      long_description=readme(),
      cmdclass={
          'install': InstallPluginCommand,
      },
      keywords='pulumi digital ocean',
      url='https://pulumi.io',
      project_urls={
          'Repository': 'https://github.com/jen20/pulumi-digitalocean'
      },
      license='Apache-2.0',
      packages=find_packages(),
      install_requires=[
          'pulumi'
      ],
      zip_safe=False)
