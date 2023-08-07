import React, { forwardRef } from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import RegisterForm, { IRegisterFormProps, IRegisterFormRef } from '../../organisms/RegisterForm/RegisterForm'

function RegisterTemplate(props: IRegisterFormProps, ref: React.Ref<IRegisterFormRef>): React.ReactElement{
    return (
        <PageWrapper style={{backgroundColor: '#a53fea'}}>
            <RegisterForm 
            {...props} ref={ref} />
        </PageWrapper>
    )
}

export default forwardRef(RegisterTemplate)