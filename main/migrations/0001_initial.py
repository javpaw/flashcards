# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Subject'
        db.create_table('main_subject', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=200)),
        ))
        db.send_create_signal('main', ['Subject'])

        # Adding model 'Bundle'
        db.create_table('main_bundle', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=200)),
            ('subject', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['main.Subject'])),
        ))
        db.send_create_signal('main', ['Bundle'])

        # Adding model 'Card'
        db.create_table('main_card', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('front', self.gf('django.db.models.fields.TextField')()),
            ('back', self.gf('django.db.models.fields.TextField')()),
            ('bundle', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['main.Bundle'])),
        ))
        db.send_create_signal('main', ['Card'])

        # Adding model 'Register'
        db.create_table('main_register', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('card', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['main.Card'])),
            ('date', self.gf('django.db.models.fields.DateTimeField')()),
            ('time', self.gf('django.db.models.fields.IntegerField')()),
            ('fails', self.gf('django.db.models.fields.IntegerField')()),
            ('hits', self.gf('django.db.models.fields.IntegerField')()),
        ))
        db.send_create_signal('main', ['Register'])


    def backwards(self, orm):
        # Deleting model 'Subject'
        db.delete_table('main_subject')

        # Deleting model 'Bundle'
        db.delete_table('main_bundle')

        # Deleting model 'Card'
        db.delete_table('main_card')

        # Deleting model 'Register'
        db.delete_table('main_register')


    models = {
        'main.bundle': {
            'Meta': {'object_name': 'Bundle'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'subject': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['main.Subject']"}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        },
        'main.card': {
            'Meta': {'object_name': 'Card'},
            'back': ('django.db.models.fields.TextField', [], {}),
            'bundle': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['main.Bundle']"}),
            'front': ('django.db.models.fields.TextField', [], {}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        'main.register': {
            'Meta': {'object_name': 'Register'},
            'card': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['main.Card']"}),
            'date': ('django.db.models.fields.DateTimeField', [], {}),
            'fails': ('django.db.models.fields.IntegerField', [], {}),
            'hits': ('django.db.models.fields.IntegerField', [], {}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'time': ('django.db.models.fields.IntegerField', [], {})
        },
        'main.subject': {
            'Meta': {'object_name': 'Subject'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'})
        }
    }

    complete_apps = ['main']