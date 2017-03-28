import chai from 'chai'
import locale from './locale'
import T from './weapp-i18n'

const expect = chai.expect

describe('weapp-i18n',function(){
    T.registerLocale(locale)
    T.setLocale('zh-Hans')
    
    it('translate into Chinese',function(){
        expect(T._('Weather')).to.be.equal('天气')
    })

    it('translate into English', function(){
        T.setLocale('en')
        expect(T._('Weather')).to.equal('Weather')
    })
})